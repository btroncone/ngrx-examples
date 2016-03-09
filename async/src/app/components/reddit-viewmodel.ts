import {Injectable} from "angular2/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {RedditPosts} from "../reducers/reddit";

@Injectable()
export class RedditViewModel{
    public selectedReddit$ : Observable<string>;
    public posts$ : Observable<Array<any>>;
    public isFetching$: Observable<boolean>;
    public lastUpdated$: Observable<Date>;

    constructor(
        private store: Store<any>
    ){
        const viewModel$ = Observable.combineLatest(
            store.select('postsByReddit'),
            store.select('selectedReddit'),
            (postsByReddit : Array<any>, selectedReddit : string) => {
                const {
                    isFetching,
                    lastUpdated,
                    posts
                } : RedditPosts = postsByReddit[selectedReddit] || {
                    isFetching: true,
                    posts: []
                };

                return {
                    selectedReddit,
                    posts,
                    isFetching,
                    lastUpdated
                }
            }
        );
        //expose to view
        this.selectedReddit$ = viewModel$.map(vm => vm.selectedReddit);
        this.posts$ = viewModel$.map(vm => vm.posts);
        this.isFetching$ = viewModel$.map(vm => vm.isFetching);
        this.lastUpdated$ = viewModel$.map(vm => vm.lastUpdated);
    }
}