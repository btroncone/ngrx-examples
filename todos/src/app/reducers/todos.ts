import {Reducer, Action} from "@ngrx/store";

export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const todo : Reducer<Todo> = (state : Todo, action: Action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed
            };
        case TOGGLE_TODO:
            if(state.id !== action.payload.id){
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

export const todos : Reducer<Todo[]> = (state : Todo[] = [], action: Action) => {
  switch(action.type) {
      case ADD_TODO:
          return [
              ...state,
              todo(undefined, action)
          ];
      case TOGGLE_TODO:
          return state.map(t => todo(t, action));
      default:
          return state;
  }
};

