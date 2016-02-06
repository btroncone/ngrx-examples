import {Injectable} from "angular2/core";
import {TodosActions} from "../actions/todos.actions";
import {VisibilityFilterActions} from "../actions/visibility-filter.actions";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodosVm{
    public vm$ : Observable<{todos$, visibilityFilter$}>;
    constructor(
        private store: Store,
        public todosActions: TodosActions,
        public visibilityFilterActions: VisibilityFilterActions
    ){
        this.vm$ = Observable.combineLatest(
            store.select('todos'),
            store.select('visibilityFilter'),
            (todos$, visibilityFilter$) =>
                ({todos$, visibilityFilter$})
        );
    }
}