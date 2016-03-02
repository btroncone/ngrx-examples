import {usePostMiddleware, usePreMiddleware, Middleware} from "@ngrx/store";

const actionLog : Middleware = (action) => {
    return action.do(val => {
        console.warn('DISPATCHED ACTION: ', val)
    });
};

const stateLog : Middleware = (state) => {
    return state.do(val => {
        console.info('NEW STATE: ', val)
    });
};

export const BASIC_LOGGER_MIDDLEWARE = [
    usePreMiddleware(actionLog),
    usePostMiddleware(stateLog)
];

