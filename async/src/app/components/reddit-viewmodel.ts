// import {Injectable} from "angular2/core";
// import {Store} from "@ngrx/store";
// import {Observable} from "rxjs/Observable";
// import {Posts} from "../reducers/reddit";
//
// @Injectable()
// export class RedditViewModel{
//     public viewModel$ : Observable<Posts>;
//     constructor(
//         private store: Store<any>
//     ){
//         this.viewModel$ = Observable.combineLatest(
//             store.select('postsByReddit'),
//             store.select('selectedReddit'),
//             (postsByReddit, selectedReddit) => {
//                 const {
//                     isFetching,
//                     lastUpdated,
//                     items: posts
//                 } = postsByReddit[selectedReddit] || {
//                     isFetching: true,
//                     items: []
//                 };
//
//                 return{
//                     selectedReddit,
//                     posts,
//                     isFetching,
//                     lastUpdated
//                 }
//             }
//         );
//     }
// }