import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ProductList} from './components/product-list';
import {CartList} from './components/cart-list';

import {getProducts, addToCart} from './actions/products';
import {checkout} from './actions/cart';

import {getProductsAsArry, getCalculatedCartList} from './reducers';
import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';

@Component({
    selector: `shopping-cart-app`,
    template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #5 - Shopping Cart</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<product-list
				[products]="(products | async)"
                (addToCart)="actions$.next(addToCartAction($event))">
			</product-list>
            <cart-list
				[cartList]="(cartList | async)"
                (checkout)="actions$.next(checkoutAction($event))">
			</cart-list>
		</div>
	</div>
	`,
    directives: [ProductList, CartList],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartApp {

    cartList: any;
    products: any;
    actions$ = new Subject<Action>();

    addToCartAction = addToCart;
    checkoutAction = checkout;

    constructor(public store: Store<any>) {
        this.products = store.let(getProductsAsArry());
        this.cartList = store.let(getCalculatedCartList());

        this.actions$.subscribe(store);
        this.actions$.next(getProducts());
    }
}
