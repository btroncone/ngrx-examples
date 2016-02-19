import {Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from "angular2/core";
import {Todo} from "../reducers/todos";


@Component({
    selector: 'todo-item',
    template: `
    <li class="margin-t-20">
        <strong [class.complete]="todo.completed">{{todo.text}}</strong>
        <button class="pure-button pure-button-primary"
            (click)="toggleTodo.emit(todo)">
            {{todo.completed ? 'Undo' : 'Complete'}}
        </button>
    </li>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem{
    @Input() todo: Todo;
    @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
}