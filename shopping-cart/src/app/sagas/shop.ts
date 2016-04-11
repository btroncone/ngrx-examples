import {Http} from 'angular2/http';
import {createSaga, Saga, whenAction, toPayload} from 'store-saga';
import {REQUEST_PRODUCTS, RECEIVED_PRODUCTS} from '../reducers/products';
import {CHECKOUT_REQUEST, CHECKOUT_FAILURE, CHECKOUT_SUCCESS} from '../reducers/cart';
import * as shop from '../../api/shop';
import { Observable } from 'rxjs/Observable';


const load = () => {
    return saga$ => saga$
        .filter(whenAction(REQUEST_PRODUCTS))
        .mergeMap(() => shop.default.getProducts(300))
        .map(res => {
            return {
                type: RECEIVED_PRODUCTS,
                payload: res
            };
        });
};

const checkout = () => {
    return saga$ => saga$
        .filter(whenAction(CHECKOUT_REQUEST))
        .map(toPayload)
        .mergeMap(payload => shop.default.buyProducts(payload, 300))
        .map(res => {
            return {
                type: CHECKOUT_SUCCESS,
                payload: res
            };
        });
};


export default [
    load,
    checkout
].map(effect => createSaga(effect));