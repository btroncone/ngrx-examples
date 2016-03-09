import {Injectable} from "angular2/core";
import {Store, Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";
import {Reddit} from "../services/reddit";
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    INVALIDATE_REDDIT,
    SELECT_REDDIT
} from "../reducers/reddit";


@Injectable()
export class RedditActions{
    private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});

    constructor(
        private _store : Store<any>,
        private _reddit : Reddit
    ){
        const posts$ = _store.select(state => state.postsByReddit);

        const selectReddit = this.actions$
            .filter((action : Action) => action.type === SELECT_REDDIT);
    
        const invalidateReddit = this.actions$
            .filter((action : Action) => action.type === INVALIDATE_REDDIT);

        const fetchPostsIfNeeded = selectReddit
            .withLatestFrom(posts$, (action, post) => ({
                shouldFetch: this.shouldFetchPosts(post, action.payload),
                action
            }))
            .filter(({action, shouldFetch}) => shouldFetch)

        //noinspection TypeScriptUnresolvedVariable,TypeScriptValidateTypes
        const fetchPosts = fetchPostsIfNeeded
            .do(({action}) => { _store.dispatch({type : REQUEST_POSTS, payload: {reddit: action.payload}})})
            //if data does not exist, fetch posts
            .flatMap(({action}) => _reddit.fetchPosts(action.payload),
                ({action}, {data}) => ({ type: RECEIVE_POSTS, payload: {reddit: action.payload, data}}));

        Observable
            .merge(selectReddit, invalidateReddit, fetchPosts)
            .subscribe(_store);
    }

    selectReddit(reddit: string){
        this.actions$.next({type: SELECT_REDDIT, payload: reddit});
    }

    invalidateReddit(reddit : string){
        this.actions$.next({type: INVALIDATE_REDDIT, payload: {reddit} });
        this.selectReddit(reddit);
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