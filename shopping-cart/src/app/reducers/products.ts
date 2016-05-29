import {ActionReducer, Action} from "@ngrx/store";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';


export interface IProduct {
    id: number;
    price: number;
    quantity: number;
    title: string;
}

export const products: ActionReducer<{}> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case RECEIVED_PRODUCTS:
            return Object.assign({},
                state,
                action.payload.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            );
        case ADD_TO_CART:
            return Object.assign({}, state, {
                [action.payload]: Object.assign({}, state[action.payload], {
                    inventory: state[action.payload].inventory - 1
                })
            });
        default:
            return state;
    }
};

