import '../../test_harness';
import {Injector, Provider} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {provideStore, Store, Action, Dispatcher, usePostMiddleware} from '@ngrx/store';
import {Saga, SagaRunner, schedulerProvider, SagaScheduler, createSaga, whenAction, installSagaMiddleware} from 'store-saga';
import {SagaTester} from 'store-saga/testing';
import RESPOND_PROVIDERS, {Respond} from 'respond-ng';

import {products, REQUEST_PRODUCTS, RECEIVED_PRODUCTS} from '../reducers/products';
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from '../reducers/cart';
import {jsonProducts} from '../../api/productsJSON';

import sagas from './shop';


describe('Shop Effect LOAD', () => {
    let sagaTester: SagaTester;

    beforeEach(() => {
        const injector = Injector.resolveAndCreate([
            SagaTester, schedulerProvider
        ]);

        sagaTester = injector.get(SagaTester);
    });

    it('should dispatch products list', (done) => {

        sagaTester.run(sagas[0]);
        sagaTester.sendAction({ type: REQUEST_PRODUCTS });

        sagaTester.output
            .filter(Boolean)
            .subscribe(last => {
                expect(last).toEqual({ type: RECEIVED_PRODUCTS, payload: jsonProducts });
                done();
            });
    });

    it('should checkout products', (done) => {

        sagaTester.run(sagas[1]);
        sagaTester.sendAction({ type: CHECKOUT_REQUEST, payload: [0, 1] });

        sagaTester.output
            .filter(Boolean)
            .subscribe(last => {
                expect(last).toEqual({ type: CHECKOUT_SUCCESS, payload: true });
                done();
            });
    });
});
