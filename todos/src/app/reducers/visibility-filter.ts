import {Reducer, Action} from "@ngrx/store";
import {SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL} from "../common/app.actions";

export const visibilityFilter : Reducer<any> = (state : any = t => t, action : Action) => {
    switch(action.type){
        case SHOW_COMPLETED:
            return todo => todo.completed;
        
        case SHOW_ACTIVE:
            return todo => !todo.completed;
        
        case SHOW_ALL:
            return todo => todo;
            
        default:
            return state;
    }
};

