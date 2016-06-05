import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects'
import 'rxjs';

import {REQUEST_PRODUCTS, RECEIVED_PRODUCTS} from '../reducers/products';
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from '../reducers/cart';
import * as shop from '../../api/shop';

@Injectable()
export class ShopEffects {
    constructor(private updates$: StateUpdates<any>) { }

    @Effect() load$ = this.updates$
        .whenAction(REQUEST_PRODUCTS)
        .map(update => JSON.stringify(update.action.payload))
        .switchMap(() => shop.default.getProducts(300))
        .map(res => {
            return {
                type: RECEIVED_PRODUCTS,
                payload: res
            };
        });

    @Effect() checkout$ = this.updates$
        .whenAction(CHECKOUT_REQUEST)
        .map(update => JSON.stringify(update.action.payload))
        .switchMap(payload => shop.default.buyProducts(payload, 300))
        .map(res => {
            return {
                type: CHECKOUT_SUCCESS,
                payload: res
            };
        });
}