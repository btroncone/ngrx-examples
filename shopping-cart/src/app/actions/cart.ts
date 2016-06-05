import {Action} from '@ngrx/store';
import {CHECKOUT_REQUEST} from '../reducers/cart';

export const checkout = (products: [number]) => {
    return <Action>{ type: CHECKOUT_REQUEST, payload: products };
}