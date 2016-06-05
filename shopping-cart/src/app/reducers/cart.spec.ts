import {ADD_TO_CART} from './products';
import cartReducer, * as fromCart from './cart';

declare var it, expect, describe, toBe;

describe('The cart reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = { productIds: [], quantityById: [] };
        const actual = cartReducer(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should initialize quantity in cart when ADD_TO_CART is dispatched', () => {
        const state = { productIds: [], quantityById: [] }
        const actual = cartReducer(state, { type: ADD_TO_CART, payload: 1 });
        const expected = state;
        expect(1).toBe(actual.quantityById[1]);
        expect(1).toBe(actual.productIds[0]);
    });

    it('should increase quantity in cart when ADD_TO_CART is dispatched', () => {
        const state = { productIds: [2], quantityById: { 2: 1 } }
        const actual = cartReducer(state, { type: ADD_TO_CART, payload: 2 });
        const expected = state;
        expect(state.quantityById[2] + 1).toBe(actual.quantityById[2]);
        expect(2).toBe(actual.productIds[0]);
    });

    it('should return initial cart when CHECKOUT_SUCCESS is dispatched', () => {
        const state = { productIds: [2], quantityById: { 2: 1 } }
        const actual = cartReducer(state, { type: fromCart.CHECKOUT_SUCCESS });
        const expected = { productIds: [], quantityById: {} };
        expect(actual).toEqual(expected);
    });
});
