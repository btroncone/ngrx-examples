import {ActionReducer, Action} from "@ngrx/store";

export interface RedditPosts {
    isFetching: boolean,
    didInvalidate?: boolean,
    posts: Array<any>,
    lastUpdated?: Date,
    selectedReddit?: string
}

export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectedReddit : ActionReducer<string> = (state : string = 'Angular 2', action: Action) => {
    switch(action.type) {
        case SELECT_REDDIT:
            return action.payload;
        default:
            return state;
    }
};

const posts : ActionReducer<RedditPosts> = (state : RedditPosts = {
    isFetching: false,
    didInvalidate: false,
    posts: []
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
              posts: action.payload.data.children.map(child => child.data),
              lastUpdated: Date.now()
          });
      default:
          return state;
  }
};

export const postsByReddit : ActionReducer<RedditPosts> = (state: {} = {}, action : Action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.payload.reddit]: posts(state[action.payload.reddit], action)
            });
        default:
            return state;
    }
};

