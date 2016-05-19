/*
    I prefer to keep action constants in a single file.
    This allows you to, at a quick glance, see all relevant user interaction within your application.
    You could also keep actions with the appropriate reducers or export each action group seperately.
*/

//todo actions
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//filter actions
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';