import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {TodoList} from "./components/todo-list";
import {TodosViewModel} from "./components/todos-viewmodel";
import {VisibilityFilterActions} from "./actions/visibility-filter.actions";
import {TodosActions} from "./actions/todos.actions";
import {AsyncPipe} from "angular2/common";
import {Devtools} from '@ngrx/devtools';

@Component({
	selector: `todo-app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #2 - Todos</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<todo-list
				[todos]="(viewModel.todos$ | async)"
				[completedTodos]="(viewModel.completedTodos$ | async)"
				[totalTodos]="(viewModel.totalTodos$ | async)"
				(toggleTodo)="todosActions.toggleTodo($event)"
				(addTodo)="todosActions.addTodo($event)"
				(visibility)="visibilityFilterActions.setVisibilityFilter($event)">
			</todo-list>
		</div>
	</div>
	<ngrx-devtools></ngrx-devtools>
	`,
    directives: [TodoList, Devtools],
	pipes: [AsyncPipe],
	providers: [TodosViewModel],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoApp {
	constructor(
		public viewModel : TodosViewModel,
		public todosActions: TodosActions,
		public visibilityFilterActions: VisibilityFilterActions
	){}
}