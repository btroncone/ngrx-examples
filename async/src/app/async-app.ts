import {Component} from 'angular2/core';
import {RedditViewModel, RedditVm} from "./components/reddit-viewmodel";
import {RedditActions} from "./actions/reddit.actions";
import {RedditSelect} from "./components/reddit-select";
import {RedditList} from "./components/reddit-list";
import {DatePipe} from "angular2/common";

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
		<h2>Currently Displaying: {{viewModel.selectedReddit}}</h2>
		<h5>Last Updated: {{viewModel.lastUpdated | date:'mediumTime'}}</h5>
			<reddit-select
				(redditSelect)="redditActions.selectReddit($event)">
			</reddit-select>
			<button
				(click)="redditActions.invalidateReddit(viewModel.selectedReddit)">
				Refresh
			</button>
			<reddit-list
				[posts]="viewModel.posts"
				[isFetching]="viewModel.isFetching">
			</reddit-list>
		</div>
	</div>
	`,
    directives: [RedditList, RedditSelect],
	providers: [RedditViewModel],
	pipes: [DatePipe]
})
export class AsyncApp {
	viewModel : RedditVm;
	constructor(
		private redditViewModel: RedditViewModel,
		private redditActions: RedditActions
	){
		this.redditViewModel.viewModel$.subscribe(viewModel => this.viewModel = viewModel)
	}

}