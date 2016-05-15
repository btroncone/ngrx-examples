import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Todo} from "../reducers/todos";

export interface TodosVm{
    todos : Todo[],
    totalTodos: number,
    completedTodos: number
}

@Injectable()
export class TodosViewModel{
    public viewModel$ : Observable<TodosVm>;
    constructor(
        private store: Store<any>
    ){
        this.viewModel$ = Observable.combineLatest(
            store.select('todos'),
            store.select('visibilityFilter'),
            ({past = [], present = [], future = []}, visibilityFilter : string) => {
                return {
                    todos: this.visibleTodos(present, visibilityFilter),
                    totalTodos: present.length,
                    completedTodos: present.filter((todo : Todo) => todo.completed).length
                }
            }
        );
    }

    private visibleTodos(todos : Todo[], filter: string) : Todo[]{
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
        }
    }
}