import {Reducer, Action} from "@ngrx/store";

export interface Posts {
    isFetching: boolean,
    didInvalidate: boolean,
    items: [any],
    lastUpdated?: string | Date
}

export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectedReddit : Reducer<string> = (state : string = 'Angular 2', action: Action) => {
    switch(action.type) {
        case SELECT_REDDIT:
            return action.payload;
        default:
            return state;
    }
};

const posts : Reducer<Posts> = (state : Posts = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action: Action) => {
  switch(action.type) {
      case INVALIDATE_REDDIT:
          return Object.assign({}, state, {
              didInvalidate: true
          });
      case REQUEST_POSTS:
          return Object.assign({}, state, {
              isFetching: true,
              didInvalidate: false
          });
      case RECEIVE_POSTS:
          return Object.assign({}, state, {
              isFetching: false,
              didInvalidate: false,
              items: action.payload.posts,
              lastUpdated: action.payload.receivedAt
          });
      default:
          return state;
  }
};

export const postsByReddit : Reducer<{}> = (state: {} = {}, action : Action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.payload.reddit]: posts(state[action.payload.reddit], action)
            });
        default:
            return state
    }
};

