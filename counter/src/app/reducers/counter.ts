import {ActionReducer, Action} from "@ngrx/store";

/*
    Default parameter will be used for initial state unless initial
    state is provided for this reducer in 'provideStore' method.
 */
export const counter: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};