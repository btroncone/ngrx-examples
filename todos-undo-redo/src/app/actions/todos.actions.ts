import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Todo, ADD_TODO, TOGGLE_TODO} from "../reducers/todos";
import {REDO, UNDO} from "../undoable";

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

    undo(){
        this.store.dispatch({type: UNDO});
    }

    redo(){
        this.store.dispatch({type: REDO});
    }
}