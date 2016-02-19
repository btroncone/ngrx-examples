import {Component} from 'angular2/core';
import {TodoList} from "./components/todo-list";
import {TodosViewModel, TodosVm} from "./components/todos-viewmodel";
import {VisibilityFilterActions} from "./actions/visibility-filter.actions";
import {TodosActions} from "./actions/todos.actions";

@Component({
	selector: `todo-app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #4 - Todos Undo/Redo</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<todo-list
				[todos]="viewModel.todos"
				[completedTodos]="viewModel.completedTodos"
				[totalTodos]="viewModel.totalTodos"
				(toggleTodo)="todosActions.toggleTodo($event)"
				(addTodo)="todosActions.addTodo($event)"
				(undo)="todosActions.undo()"
				(redo)="todosActions.redo()"
				(visibility)="visibilityFilterActions.setVisibilityFilter($event)">
			</todo-list>
		</div>
	</div>
	`,
    directives: [TodoList],
	providers: [TodosViewModel]
})
export class TodoApp {
	viewModel : TodosVm;

	constructor(
		public todosVm : TodosViewModel,
		public todosActions: TodosActions,
		public visibilityFilterActions: VisibilityFilterActions
	){
		this.todosVm.viewModel$.subscribe(vm => this.viewModel = vm);
	}
}