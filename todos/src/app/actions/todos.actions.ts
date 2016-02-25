import {Injectable} from "angular2/core";
import {Store} from "@ngrx/store";
import {Todo, ADD_TODO, TOGGLE_TODO} from "../reducers/todos";

@Injectable()
export class TodosActions{
    private id : number = 1;
    constructor(private store : Store<any>){}

    addTodo(text: string){
        this.store.dispatch({type: ADD_TODO, payload: {id: this.id, text, completed: false}});
        this.id++;
    }

    toggleTodo(todo : Todo){
        this.store.dispatch({type: TOGGLE_TODO, payload: todo});
    }
}