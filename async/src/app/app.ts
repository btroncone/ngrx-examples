import { Component } from 'angular2/core';
import {RedditPosts} from "./components/reddit-posts";
import {RedditViewModel} from "./components/reddit-viewmodel";
import {Observable} from "rxjs/Observable";
import {RedditActions} from "./actions/reddit.actions";
import {RedditSelect} from "./components/reddit-select";

@Component({
	selector: `app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #3 - Async</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
		<h2>{{vm.isFetching}} {{vm.selectedReddit}}</h2>
			<reddit-select
				(redditSelect)="redditActions.selectReddit($event)">
			</reddit-select>
			<reddit-posts
				[posts]="vm.posts">
			</reddit-posts>
		</div>
	</div>
	`,
    directives: [RedditPosts, RedditSelect],
	providers: [RedditViewModel]
})
export class App {
	vm;
	constructor(
		private redditViewModel: RedditViewModel,
		private redditActions: RedditActions
	){
		this.redditViewModel.viewModel$.subscribe(vm => {this.vm = vm})
	}

}