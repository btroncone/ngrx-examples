import {Injectable} from "angular2/core";
import {Store, Action} from "@ngrx/store";
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    INVALIDATE_REDDIT,
    SELECT_REDDIT
} from "../reducers/reddit";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";
import {Reddit} from "../services/reddit";

@Injectable()
export class RedditActions{
    private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});
    private posts$: Observable<any>;

    constructor(
        private store : Store<any>,
        private reddit : Reddit
    ){
        const posts$ = store.select(state => state.postsByReddit);

        const selectReddit = this.actions$
            .filter((action : Action) => action.type === SELECT_REDDIT);

        const invalidateReddit = this.actions$
            .filter((action : Action) => action.type === INVALIDATE_REDDIT);

        const fetchPostsIfNeeded = selectReddit
            .flatMap((action : Action) => posts$.map(post => ({
                shouldFetch: this.shouldFetchPosts(post, action.payload),
                action
            })));

        const fetchPosts = fetchPostsIfNeeded
            .filter(({action, shouldFetch}) => shouldFetch)
            .do(({action}) => store.dispatch({type : REQUEST_POSTS, payload: {reddit: action.payload}}))
            //if data does not exist, fetch posts
            .flatMap(({action}) => reddit.fetchPosts(action.payload),
                ({action}, {data}) => ({ type: RECEIVE_POSTS, payload: {reddit: action.payload, data}}));

        Observable
            .merge(selectReddit, invalidateReddit, fetchPosts)
            .subscribe((action : Action) => store.dispatch(action));
    }

    selectReddit(reddit: string){
        this.actions$.next({type: SELECT_REDDIT, payload: reddit});
    }

    invalidateReddit(reddit : string){
        this.actions$.next({type: INVALIDATE_REDDIT, payload: reddit});
    }

    private shouldFetchPosts(postsByReddit, reddit){
        const posts = postsByReddit[reddit];
        if (!posts) {
            return true;
        }
        if (posts.isFetching) {
            return false;
        }
        return posts.didInvalidate;
    }


}