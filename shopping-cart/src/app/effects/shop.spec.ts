import '../../test_harness';
import {Injector, Provider, ReflectiveInjector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {provideStore, Store, Dispatcher} from '@ngrx/store';
import {
    MOCK_EFFECTS_PROVIDERS,
    MockStateUpdates
} from '@ngrx/effects/testing';

import productsReducer, * as fromProducts from '../reducers/products';
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from '../reducers/cart';
import {jsonProducts} from '../../api/productsJSON';

import {ShopEffects} from './shop';


describe('Shop Effect LOAD', () => {
    let shop: ShopEffects;
    let updates$: MockStateUpdates;

    beforeEach(function () {
        const injector = ReflectiveInjector.resolveAndCreate([
            ShopEffects,
            MOCK_EFFECTS_PROVIDERS,
            // Mock out other dependencies (like Http) here
        ]);

        shop = injector.get(ShopEffects);
        updates$ = injector.get(MockStateUpdates);
    });

    it('should dispatch products list', (done) => {

        updates$.sendAction({ type: fromProducts.REQUEST_PRODUCTS });

        shop.load$
            .filter(Boolean)
            .subscribe(last => {
                expect(last).toEqual({ type: fromProducts.RECEIVED_PRODUCTS, payload: jsonProducts });
                done();
            });
    });

    it('should checkout products', (done) => {

        updates$.sendAction({ type: CHECKOUT_REQUEST, payload: [0, 1] });

        shop.checkout$
            .filter(Boolean)
            .subscribe(last => {
                expect(last).toEqual({ type: CHECKOUT_SUCCESS, payload: 0 });
                done();
            });
    });
});
