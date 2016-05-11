import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RedditViewModel} from "./components/reddit-viewmodel";
import {RedditActions} from "./actions/reddit.actions";
import {RedditSelect} from "./components/reddit-select";
import {RedditList} from "./components/reddit-list";
import {DatePipe, AsyncPipe} from "@angular/common";
import {RefreshButton} from "./components/refresh-button";
import {Devtools} from '@ngrx/devtools';

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
		<h2>Currently Displaying: {{viewModel.selectedReddit$ | async}}</h2>
		<h5>Last Updated: {{(viewModel.lastUpdated$ | async) | date:'mediumTime'}}</h5>
			<reddit-select
				(redditSelect)="redditActions.selectReddit($event)"
				>
			</reddit-select>
			<refresh-button
				[selectedReddit]="(viewModel.selectedReddit$ | async)"
				(invalidateReddit)="redditActions.invalidateReddit($event)">
			</refresh-button>
			<reddit-list
				[posts]="(viewModel.posts$ | async)"
				[isFetching]="(viewModel.isFetching$ | async)">
			</reddit-list>
		</div>
	</div>
	<ngrx-devtools></ngrx-devtools>
	`,
    directives: [RedditList, RedditSelect, RefreshButton, Devtools],
	providers: [RedditViewModel],
	pipes: [DatePipe, AsyncPipe],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncApp {
	constructor(
		private viewModel: RedditViewModel,
		private redditActions: RedditActions
	){}

}