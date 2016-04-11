import {Action} from "@ngrx/store";
import {products, ADD_TO_CART, IProduct} from "../reducers/products";
import {CHECKOUT_REQUEST} from "../reducers/cart";

export const checkout = (products: [number]) => {
    return <Action>{ type: CHECKOUT_REQUEST, payload: products };
}