import {ActionReducer, Action} from "@ngrx/store";
import {SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL} from "../common/actions";

export const visibilityFilter : ActionReducer<any> = (state : any = t => t, action : Action) => {
    switch(action.type){
        case SHOW_COMPLETED:
            return todo => todo.complete;
        
        case SHOW_ACTIVE:
            return todo => !todo.complete;
        
        case SHOW_ALL:
            return todo => todo;
            
        default:
            return state;
    }
};

