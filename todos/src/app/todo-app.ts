import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TodoList} from "./components/todo-list";
import {TodoInput} from "./components/todo-input";
import {FilterSelect} from "./components/filter-select";
import {Store} from '@ngrx/store';
import {Devtools} from '@ngrx/devtools';
import {AppState, Todo, TodoModel} from "./common/interfaces";
import {Observable} from "rxjs/Observable";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './common/app.actions';

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
			<todo-input
				(addTodo)="addTodo($event)">
			</todo-input>
			<filter-select	
				(filterSelect)="updateFilter($event)">
			</filter-select>
			<todo-list
				[todosModel]="todosModel$ | async"
				(removeTodo)="removeTodo($event)"
				(toggleTodo)="toggleTodo($event)">
			</todo-list>
		</div>
	</div>
	<ngrx-devtools></ngrx-devtools>
	`,
    directives: [TodoList, TodoInput, FilterSelect, Devtools],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoApp {
	public todosModel$ : Observable<TodoModel>;
	private id: number = 0;
	
	constructor(
		private _store : Store<AppState>
	){
		const todos$ = _store.select<Observable<Todo[]>>('todos');
		const visibilityFilter$ = _store.select('visibilityFilter');
		
		this.todosModel$ = Observable
			.combineLatest(
				todos$,
				visibilityFilter$,
				(todos : Array<Todo>, visibilityFilter : any) => {
					return {
						filteredTodos: todos.filter(visibilityFilter),
						totalTodos: todos.length,
						completedTodos: todos.filter((todo : Todo) => todo.complete).length
					}
				}
			);
	}
	
	addTodo(description : string){
		this._store.dispatch({type: ADD_TODO, payload: {
			id: ++this.id,
			description,
			complete: false
		}});
	}
	
	removeTodo(id : number){
		this._store.dispatch({type: REMOVE_TODO, payload: id});
	}
	
	toggleTodo(id : number){
		this._store.dispatch({type: TOGGLE_TODO, payload: id});
	}
	
	updateFilter(filter){
		this._store.dispatch({type: filter});
	}
}