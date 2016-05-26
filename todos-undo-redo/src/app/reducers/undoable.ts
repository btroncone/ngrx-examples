import {ActionReducer, Action} from "@ngrx/store";
import {UndoableState} from "../common/interfaces";

//based on Rob Wormald's example http://plnkr.co/edit/UnU1wnFcausVFfEP2RGD?p=preview
/*
    This is a 'meta-reducer', meant to wrap (accept a reducer, return reducer) any reducer to quickly provide undo/redo capability.
    With the removal of middleware in Store v2 meta-reducers will replace the majority of that functionality.
    More on meta-reducers: https://gist.github.com/btroncone/a6e4347326749f938510#implementing-a-meta-reducer
    Example local-storage: https://github.com/btroncone/ngrx-store-localstorage/tree/storev2
    Example logger: https://github.com/btroncone/ngrx-store-logger/tree/loggerv2
*/
export function undoable(reducer : ActionReducer<any>) {
    // Call the reducer with empty action to populate the initial state
    const initialState : UndoableState = {
        past: [],
        present: reducer(undefined, {type: '__INIT__'}),
        future: []
    };

    // Return a reducer that handles undo and redo
    return function (state = initialState, action : Action) {
        const { past, present, future } = state;
        switch (action.type) {

            case 'UNDO':
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [ present, ...future ]
                };
            case 'REDO':
                const next = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [ ...past, present ],
                    present: next,
                    future: newFuture
                };
            default:
                // Delegate handling the action to the passed reducer
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [ ...past, present ],
                    present: newPresent,
                    future: []
                }
        }
    }
}