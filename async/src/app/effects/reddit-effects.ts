import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {StateUpdates, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Reddit} from "../services/reddit";
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_REDDIT
} from "../reducers/reddit";


@Injectable()
export class RedditEffects{
    constructor(
        private _updates$: StateUpdates<any>,
        private _reddit : Reddit
    ){}
    
    @Effect() fetchPosts$ = this._updates$
            .whenAction(SELECT_REDDIT) 
            .filter(({state, action}) => this.shouldFetchPosts(state.postsByReddit,action.payload)) 
            .switchMap(({action}) => Observable.concat(
                Observable.of({type: REQUEST_POSTS, payload: {reddit: action.payload}}),
                this._reddit
                    .fetchPosts(action.payload)
                    .map(({data}) => ({ type: RECEIVE_POSTS, payload: {reddit: action.payload, data}})
            )));  

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