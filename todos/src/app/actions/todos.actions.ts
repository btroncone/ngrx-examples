import {Injectable} from "angular2/core";
import {Store, Action} from "@ngrx/store";
import {Todo, ADD_TODO, TOGGLE_TODO} from "../reducers/todos";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class TodosActions{
    private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});

    constructor(private store : Store){
        const addTodo = this.actions$
            .filter((action : Action) => action.type === ADD_TODO);

        const toggleTodo = this.actions$
            .filter((action : Action) => action.type === TOGGLE_TODO);

        Observable
            .merge(addTodo, toggleTodo)
            .subscribe((action : Action) => store.dispatch(action));

    }

    addTodo(todo: Todo){
        this.actions$.next({type: ADD_TODO, payload: todo});
    }

    toggleTodo(todo : Todo){
        this.actions$.next({type: TOGGLE_TODO, payload: todo});
    }
}