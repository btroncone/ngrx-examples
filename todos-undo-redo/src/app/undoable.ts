import {Reducer, Action} from "@ngrx/store";

export interface UndoableState{
    past: any[],
    present: Reducer,
    future: any[]
}

export const UNDO = 'UNDO';
export const REDO = 'REDO';

//based on Rob Wormald's example http://plnkr.co/edit/UnU1wnFcausVFfEP2RGD?p=preview
export function undoable(reducer : Reducer) {
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