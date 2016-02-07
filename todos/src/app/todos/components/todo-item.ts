import {Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from "angular2/core";
import {Todo} from "../../reducers/todos";


@Component({
    selector: 'todo-item',
    template: `
    <li (click)="completeTodo.emit(todo)">
        {{todo.text}}
    </li>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem{
    @Input() todo: Todo;
    @Output() completeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
}