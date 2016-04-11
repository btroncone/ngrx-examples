import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {ProductList} from "./components/product-list";
import {CartList} from "./components/cart-list";
import {ProductsActions} from "./actions/products.actions";
import {CartActions} from "./actions/cart.actions";
import {AsyncPipe} from "angular2/common";
import {Devtools} from '@ngrx/devtools';
import { Observable } from 'rxjs';

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
				[products]="(productsActions.products$ | async)">
			</product-list>
            <cart-list
				[cartList]="(cartList | async)">
			</cart-list>
		</div>
	</div>
	<ngrx-devtools></ngrx-devtools>
	`,
    directives: [ProductList, CartList, Devtools],
    pipes: [AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartApp {

    cartList: any;

    constructor(
        public cartActions: CartActions,
        public productsActions: ProductsActions
    ) {
        productsActions.getProducts();
        this.cartList = Observable
            .combineLatest(cartActions.cart$, productsActions.products$)
            .filter((res: any) => {
                return !!res[0].productIds && !!res[1]
            })
            .map((res: any) => {
                var result: any = [];
                res[0].productIds.forEach(productId => {
                    var product = res[1].filter(product => product.id == productId)[0]
                    result.push({
                        title: product.title,
                        price: product.price,
                        quantity: res[0].quantityById[productId]
                    });
                });
                return result;
            });
    }
}