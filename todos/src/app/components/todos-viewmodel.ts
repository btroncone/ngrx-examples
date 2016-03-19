import {Injectable} from "angular2/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Todo} from "../reducers/todos";

@Injectable()
export class TodosViewModel{
    public todos$ : Observable<Todo[]>;
    public totalTodos$ : Observable<number>;
    public completedTodos$ : Observable<number>;

    constructor(
        private store: Store<any>
    ){
        const viewModel$ = Observable.combineLatest(
            store.select('todos'),
            store.select('visibilityFilter'),
            (todos : Array<Todo>, visibilityFilter : string) => {
                return {
                    todos: this.visibleTodos(todos, visibilityFilter),
                    totalTodos: todos.length,
                    completedTodos: todos.filter((todo : Todo) => todo.completed).length
                }
            }
        ).share();
        //expose to view
        this.todos$ = viewModel$.map(vm => vm.todos);
        this.totalTodos$ = viewModel$.map(vm => vm.totalTodos);
        this.completedTodos$ = viewModel$.map(vm => vm.completedTodos);
    }

    private visibleTodos(todos : Array<Todo>, filter: string) : Todo[]{
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