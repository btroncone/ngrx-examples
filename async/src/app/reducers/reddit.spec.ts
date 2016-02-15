import {selectedReddit, postsByReddit} from "./reddit";
//had issue with jasmine typing conflicts, this is temporary workaround
declare var it, expect, describe, toBe;

describe('The selectedReddit reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = "Angular 2";
        const actual = selectedReddit(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should return currently selected reddit when SELECT_REDDIT is dispatched', () => {
        const state = "ReactJS";
        const actual = selectedReddit(state, {type: 'SELECT_REDDIT', payload: 'ReactJS'});
        const expected = state;
        expect(actual).toBe(expected);
    });
});

describe('The postsByReddit reducer', () => {

    it('should return current state when no valid actions have been made', () => {
        const state = {};
        const actual = postsByReddit(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should set isFetching to true and didInvalidate to false when posts are requested', () => {
        const state = {};
        const reddit = 'Angular 2';
        const actual = postsByReddit(state, {type: 'REQUEST_POSTS', payload: {reddit}});
        const expected = {
            [reddit]: {
                isFetching: true,
                didInvalidate: false,
                posts:[]
            }
        };
        expect(actual).toEqual(expected);
    });

    it('should invalidate a reddit when INVALIDATE_REDDIT is dispatched', () => {
        const reddit = 'Angular 2';
        const state = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        const expected = {
            [reddit]: {
                isFetching: false,
                didInvalidate: true,
                posts:[]
            }
        };
        const actual = postsByReddit(state, {type: 'INVALIDATE_REDDIT', payload: {reddit}});
        expect(actual).toEqual(expected);
    });

    it('should populate posts when RECEIEVE_POSTS is dispatched', () => {
        const reddit = 'Angular 2';
        const state = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        const expected = {
            [reddit]: {
                isFetching: false,
                didInvalidate: true,
                posts:[{},{},{}]
            }
        };
        const actual = postsByReddit(state, {type: 'RECEIVE_POSTS', payload: {reddit, data: {children: [{}, {}, {}]}}});
        expect(actual[reddit].posts.length).toEqual(expected[reddit].posts.length);
    });

    it('should mark lastUpdated when RECEIEVE_POSTS is dispatched', () => {
        const reddit = 'Angular 2';
        const state = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        const actual = postsByReddit(state, {type: 'RECEIVE_POSTS', payload: {reddit, data: {children: [{}]}}});
        expect(actual[reddit].lastUpdated).toBeDefined();
    });
});