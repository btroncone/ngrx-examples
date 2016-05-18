import {todos} from "./todos";
import {visibilityFilter} from "./visibility-filter";
import {undoable} from "./undoable";

export const APP_REDUCERS = {
    todos: undoable(todos),
    visibilityFilter
};