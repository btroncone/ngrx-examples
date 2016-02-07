import {todos, Todo} from "./todos";

describe('The counter reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state : Todo[] = [
            {
                id: 1,
                text: 'Test',
                completed: false
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
                completed: false
            }
        ];
        const expectedState : Todo[] = [
            {
                id: 1,
                text: 'Test',
                completed: false
            },
            {
                id: 2,
                text: 'New Todo',
                completed: false
            }
        ];
        const newTodo : Todo = {
                id: 2,
                text: 'New Todo',
                completed: false
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
                completed: false
            }
        ];
        const todoToToggle = {
            id: 1,
            text: 'Test',
            completed: false
        };
        const [actual] = todos(state, {type: 'TOGGLE_TODO', payload: todoToToggle});
        const expected = true;
        expect(actual.completed).toBe(expected);
    });

});