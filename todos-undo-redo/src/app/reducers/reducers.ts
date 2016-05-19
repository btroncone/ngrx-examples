import {todos} from "./todos";
import {visibilityFilter} from "./visibility-filter";
import {undoable} from "./undoable";
//wrap todos reducer for undo/redo functionality
export const APP_REDUCERS = {
    todos: undoable(todos),
    visibilityFilter
};