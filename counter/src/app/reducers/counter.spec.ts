import {counter} from "./counter";

describe('The counter reducer', () => {
    it('should return initial state when no valid actions have been made', () => {
        const actual = counter(0, {type: 'INVALID_ACTION'});
        const expected = 0;
        expect(actual).toBe(expected);
    });

    it('should increment the counter when INCREMENT action is dispatched', () => {
        const actual = counter(0, {type: 'INCREMENT'});
        const expected = 1;
        expect(actual).toBe(expected);
    });

    it('should decrement the counter when DECREMENT action is dispatched', () => {
        const actual = counter(0, {type: 'DECREMENT'});
        const expected = -1;
        expect(actual).toBe(expected);
    });
});