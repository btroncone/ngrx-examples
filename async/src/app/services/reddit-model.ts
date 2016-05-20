import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {RedditPosts} from "../reducers/reddit";

@Injectable()
export class RedditModel{
    public selectedReddit$ : Observable<string>;
    public posts$ : Observable<Array<any>>;
    public isFetching$: Observable<boolean>;
    public lastUpdated$: Observable<Date>;

    constructor(
        private store: Store<any>
    ){
        const model$ = Observable.combineLatest(
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
        ).share();
        //expose to view
        this.selectedReddit$ = model$.map(vm => vm.selectedReddit);
        this.posts$ = model$.map(vm => vm.posts);
        this.isFetching$ = model$.map(vm => vm.isFetching);
        this.lastUpdated$ = model$.map(vm => vm.lastUpdated);
    }
}