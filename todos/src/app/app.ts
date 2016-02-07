import {Component} from 'angular2/core';
import {TodoList} from "./todos/todo-list";

@Component({
	selector: `app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #2 - Todos</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<todo-list></todo-list>
		</div>
	</div>
	`,
    directives: [TodoList]
})
export class App {}