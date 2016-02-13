// import {Injectable} from "angular2/core";
// import {Store, Action} from "@ngrx/store";
// import {
//     Posts,
//     REQUEST_POSTS,
//     RECEIVE_POSTS,
//     INVALIDATE_REDDIT,
//     SELECT_REDDIT
// } from "../reducers/reddit";
// import {Observable} from "rxjs/Observable";
// import {BehaviorSubject} from "rxjs/Rx";
// import {Reddit} from "../services/reddit";
//
// @Injectable()
// export class RedditActions{
//     private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});
//     private postsByReddit$ : Observable;
//
//     constructor(
//         private store : Store<any>,
//         private reddit : Reddit
//     ){
//         this.postsByReddit$ = store.select('postsByReddit');
//
//         const selectReddit = this.actions$
//             .filter((action : Action) => action.type === SELECT_REDDIT);
//
//         const invalidateReddit = this.actions$
//             .filter((action : Action) => action.type === INVALIDATE_REDDIT);
//
//         const fetchPostsIfNeeded = Observable.combineLatest(
//                 this.actions$,
//                 this.postsByReddit$,
//                 (action : Action, postsByReddit) => ({action, postsByReddit}))
//             .filter(({action, postsByReddit}) => action.type === REQUEST_POSTS && this.shouldFetchPosts(postsByReddit, action.payload))
//             .mergeMap(({action : Action}) => this.reddit.fetchPosts(action.payload),
//                 (action, payload) => ({type: RECEIVE_POSTS, payload })
//             );
//
//         Observable
//             .merge(selectReddit, invalidateReddit, fetchPostsIfNeeded)
//             .subscribe((action : Action) => store.dispatch(action));
//     }
//
//     selectReddit(reddit: string){
//         this.actions$.next({type: SELECT_REDDIT, payload: reddit});
//     }
//
//     invalidateReddit(reddit : string){
//         this.actions$.next({type: INVALIDATE_REDDIT, payload: reddit});
//     }
//
//     fetchPostsIfNeeded(reddit: string){
//         this.actions$.next({type: REQUEST_POSTS, payload: reddit});
//     }
//
//     private shouldFetchPosts(state, reddit : string){
//         const posts = state.postsByReddit[reddit];
//         if (!posts) {
//             return true
//         }
//         if (posts.isFetching) {
//             return false
//         }
//         return posts.didInvalidate
//     }
// }