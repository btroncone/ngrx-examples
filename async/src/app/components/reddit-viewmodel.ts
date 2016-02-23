import {Injectable} from "angular2/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {RedditPosts} from "../reducers/reddit";

export interface RedditVm extends RedditPosts{
    selectedReddit: string
}

@Injectable()
export class RedditViewModel{
    public viewModel$ : Observable<RedditVm>;
    constructor(
        private store: Store<any>
    ){
        this.viewModel$ = Observable.combineLatest(
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
    }
}