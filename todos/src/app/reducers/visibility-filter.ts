import {Reducer, Action} from "@ngrx/store";

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilter : Reducer<string> = (state : string = 'SHOW_ALL', action : Action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
};

