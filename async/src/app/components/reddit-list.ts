import {Component, ChangeDetectionStrategy, Input} from "angular2/core";
import {RedditPosts} from "../reducers/reddit";

@Component({
    selector: 'reddit-list',
    template: `
        <div>
            <strong [hidden]="!isFetching">Loading...</strong>
            <ul>
                <li *ngFor="#post of posts">
                    {{post.title}}
                </li>
            </ul>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditList{
    @Input() posts : RedditPosts[];
    @Input() isFetching: boolean;
}