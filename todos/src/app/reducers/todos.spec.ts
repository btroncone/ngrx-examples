import {todos} from "./todos";
import {Todo} from "../common/interfaces";
//had issue with jasmine typing conflicts, this is temporary workaround
declare var it, expect, describe, toBe;

describe('The counter reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state : Todo[] = [
            {
                id: 1,
                text: 'Test',
                complete: false
            }
        ];
        const actual = todos(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should add a todo when ADD_TODO action is dispatched', () => {
        const initialState : Todo[] = [
            {
                id: 1,
                text: 'Test',
                complete: false
            }
        ];
        const expectedState : Todo[] = [
            {
                id: 1,
                text: 'Test',
                complete: false
            },
            {
                id: 2,
                text: 'New Todo',
                complete: false
            }
        ];
        const newTodo : Todo = {
                id: 2,
                text: 'New Todo',
                complete: false
        };
        const actual = todos(initialState, {type: 'ADD_TODO', payload: newTodo});
        const expected = expectedState;
        expect(actual).toEqual(expected);
    });

    it('should toggle a todos completed status when TOGGLE_TODO is dispatched', () => {
        const state : Todo[] = [
            {
                id: 1,
                text: 'Test',
                complete: false
            }
        ];
        const todoToToggle = {
            id: 1,
            text: 'Test',
            completed: false
        };
        const [actual] = todos(state, {type: 'TOGGLE_TODO', payload: todoToToggle});
        const expected = true;
        expect(actual.complete).toBe(expected);
    });

});