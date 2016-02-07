import {Injectable} from "angular2/core";
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
            (todos, visibilityFilter) => {
                return {
                    todos: this.visibleTodos(todos, visibilityFilter),
                    totalTodos: todos.length,
                    completedTodos: todos.filter((todo : Todo) => todo.completed).length
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