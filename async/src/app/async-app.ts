import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {RedditModel} from "./services/reddit-model";
import {RedditSelect} from "./components/reddit-select";
import {RedditList} from "./components/reddit-list";
import {DatePipe} from "@angular/common";
import {RefreshButton} from "./components/refresh-button";
import {SELECT_REDDIT, INVALIDATE_REDDIT} from "./reducers/reddit";

@Component({
	selector: `async-app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #3 - Async</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
		<h2>Currently Displaying: {{redditModel.selectedReddit$ | async}}</h2>
		<h5>Last Updated: {{(redditModel.lastUpdated$ | async) | date:'mediumTime'}}</h5>
			<reddit-select
				(redditSelect)="selectReddit($event)"
				>
			</reddit-select>
			<refresh-button
				[selectedReddit]="(redditModel.selectedReddit$ | async)"
				(invalidateReddit)="invalidateReddit($event)">
			</refresh-button>
			<reddit-list
				[posts]="(redditModel.posts$ | async)"
				[isFetching]="(redditModel.isFetching$ | async)">
			</reddit-list>
		</div>
	</div>
	`,
    directives: [RedditList, RedditSelect, RefreshButton],
	providers: [RedditModel],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncApp {
	constructor(
		private redditModel: RedditModel,
		private _store : Store<any>
	){}
	
	selectReddit(reddit: string){
        this._store.dispatch({type: SELECT_REDDIT, payload: reddit});
    }
	
	invalidateReddit(reddit : string){
        this._store.dispatch({type: INVALIDATE_REDDIT, payload: {reddit}});
        this._store.dispatch({type: SELECT_REDDIT, payload: reddit});
    }
}
