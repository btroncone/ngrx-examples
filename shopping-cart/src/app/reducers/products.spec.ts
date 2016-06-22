import productsReducer, * as fromProducts from './products';
import {jsonProducts} from '../../api/productsJSON';

declare var it, expect, describe, toBe;

describe('The products reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = null;
        const actual = productsReducer(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should return received products when RECEIVED_PRODUCTS is dispatched', () => {
        const state = null;
        const actual = productsReducer(state, { type: fromProducts.RECEIVED_PRODUCTS, payload: jsonProducts });
        const expected = {
            entities: jsonProducts.reduce((obj, product: fromProducts.IProduct) => {
                obj[product.id] = product;
                return obj;
            }, {})
        };
        expect(actual).toEqual(expected);
    });

    it('should decrease inventory when ADD_TO_CART is dispatched', () => {
        const state = {
            entities: jsonProducts.reduce((obj, product: fromProducts.IProduct) => {
                obj[product.id] = product;
                return obj;
            }, {})
        };
        const actual = productsReducer(state, { type: fromProducts.ADD_TO_CART, payload: 1 });
        const expected = state;
        expect(state.entities[1].inventory - 1).toBe(actual.entities[1].inventory);
    });
});
