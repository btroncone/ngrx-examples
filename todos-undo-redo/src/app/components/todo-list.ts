import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import {TodoItem} from "./todo-item";
import {Todo} from "../reducers/todos";

@Component({
    selector: 'todo-list',
    template: `
        <button class="pure-button" (click)="visibility.emit('SHOW_ALL')">All</button>
        <button class="pure-button" (click)="visibility.emit('SHOW_COMPLETED')">Completed</button>
        <button class="pure-button" (click)="visibility.emit('SHOW_ACTIVE')">Active</button>
        <button class="pure-button" (click)="undo.emit()">Completed</button>
        <button class="pure-button" (click)="redo.emit()">Active</button>
        <div class="pure-control-group">
            <label for="name">Todo Description:</label>
            <input #todo type="text" placeholder="Enter Todo...">
            <span>Completed Todos: {{completedTodos}}/{{totalTodos}}</span>
        </div>
        <button class="pure-button pure-button-primary"
            (click)="createTodo(todo)">
            Add Todo
        </button>
        <ul>
            <todo-item
                *ngFor="#todo of todos"
                [todo]="todo"
                (toggleTodo)="toggleTodo.emit($event)">
            </todo-item>
        </ul>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [TodoItem]
})
export class TodoList{
    @Input() todos : Todo[];
    @Input() completedTodos : number;
    @Input() totalTodos : number;
    @Output() addTodo : EventEmitter<string> = new EventEmitter<string>();
    @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() visibility: EventEmitter<string> = new EventEmitter<string>();
    @Output() undo : EventEmitter<any> = new EventEmitter<any>();
    @Output() redo: EventEmitter<any> = new EventEmitter<any>();

    createTodo(element){
        this.addTodo.emit(element.value);
        element.value = "";
    }
}