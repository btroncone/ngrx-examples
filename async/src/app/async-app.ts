import {Component} from 'angular2/core';
import {RedditViewModel} from "./components/reddit-viewmodel";
import {RedditActions} from "./actions/reddit.actions";
import {Posts} from "./reducers/reddit";
import {RedditPosts} from "./components/reddit-posts";

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
			<reddit-posts></reddit-posts>
		</div>
	</div>
	`,
	providers: [RedditViewModel],
	directives: [RedditPosts]
})
export class AsyncApp {
	vm : Posts;

	constructor(
		private redditActions : RedditActions,
		private redditViewModel : RedditViewModel
	){
		this.redditViewModel.viewModel$.subscribe(vm => this.vm = vm);
	}
}