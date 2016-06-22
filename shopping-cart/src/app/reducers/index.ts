import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import cartReducer, * as fromCart from './cart';
import productsReducer, * as fromProducts from './products';

export interface AppState {
    cart: fromCart.CartState;
    products: fromProducts.ProductsState;
}

export default compose(storeLogger(), combineReducers)({
    cart: cartReducer,
    products: productsReducer,
});


export function getCartState() {
    return (state$: Observable<AppState>) => state$
        .select(s => s.cart);
}

export function getProductState() {
    return (state$: Observable<AppState>) => state$
        .select(s => s.products);
}


export function getProductEntities() {
    return compose(fromProducts.getProductEntities(), getProductState());
}

export function getProductsAsArry() {
    return compose(fromProducts.getProductsAsArry(), getProductState());
}

export function getCalculatedCartList() {
    return (state$: Observable<AppState>) => {
        return Observable
            .combineLatest(state$.let(getCartState()), state$.let(getProductEntities()))
                .map(([cart, products]: any[]) => {
                    return cart.productIds.map(productId => {
                        return {
                            title: products[productId].title,
                            price: products[productId].price,
                            quantity: cart.quantityById[productId]
                        };
                    });
                });
    };
}