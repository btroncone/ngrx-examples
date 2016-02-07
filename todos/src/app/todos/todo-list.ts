import {Component, ChangeDetectionStrategy} from "angular2/core";
import {TodosVm, TodosViewModel} from "./todos-viewmodel";
import {NgFor} from "angular2/common";
import {TodosActions} from "../actions/todos.actions";
import {VisibilityFilterActions} from "../actions/visibility-filter.actions";

@Component({
    selector: 'todo-list',
    template: `
    <div class="content">
        <div class="pure-control-group">
            <label for="name">Todo Item</label>
            <input #todo type="text" placeholder="Enter Todo...">
        </div>
        <button class="pure-button pure-button-primary"
            (click)="todosActions.addTodo(todo.value)">
            Add Todo
        </button>
        <ul>
            <li *ngFor="#todo of viewModel.todos">
                {{todo.text}}
            </li>
        </ul>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoList{
    viewModel : TodosVm;

    constructor(
        public todosVm : TodosViewModel,
        public todosActions: TodosActions,
        public visibilityFilterActions: VisibilityFilterActions
    ){
        this.todosVm.viewModel$.subscribe(vm => this.viewModel = vm);
    }
}