import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "@angular/core";
import {Todo, TodoModel} from "../common/interfaces";

@Component({
    selector: 'todo-list',
    template: `  
        <strong>Completed: {{todosModel.completedTodos}}/{{todosModel.totalTodos}}
        <ul>
            <li class="margin-t-20" *ngFor="let todo of todosModel.filteredTodos">
                <strong [class.complete]="todo.complete">{{todo.description}}</strong>
                <button class="pure-button pure-button-primary"
                    (click)="toggleTodo.emit(todo.id)">
                    {{todo.complete ? 'Undo' : 'Complete'}}
                </button>
                <button class="pure-button button-error"
                    (click)="removeTodo.emit(todo.id)">
                    Remove
                </button>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoList{
    @Input() todosModel : TodoModel[];
    @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
    @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
}