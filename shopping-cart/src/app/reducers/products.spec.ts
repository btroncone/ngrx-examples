import {products, RECEIVED_PRODUCTS, ADD_TO_CART} from "./products";
import {jsonProducts} from "../../api/productsJSON";
//had issue with jasmine typing conflicts, this is temporary workaround
declare var it, expect, describe, toBe;

describe('The products reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = "Angular 2";
        const actual = products(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should return received products when RECEIVED_PRODUCTS is dispatched', () => {
        const state = jsonProducts.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {});
        const actual = products(state, {type: RECEIVED_PRODUCTS, payload: jsonProducts});
        const expected = state;
        expect(actual).toEqual(expected);
    });

    it('should decrease inventory when ADD_TO_CART is dispatched', () => {
        const state = jsonProducts.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {});
        const actual = products(state, {type: ADD_TO_CART, payload: 1});
        const expected = state;
        expect(state[1].inventory - 1).toBe(actual[1].inventory);
    });
});
