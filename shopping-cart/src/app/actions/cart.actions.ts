import {Injectable} from "angular2/core";
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {products, ADD_TO_CART, IProduct} from "../reducers/products";
import {CHECKOUT_REQUEST} from "../reducers/cart";

@Injectable()
export class CartActions {

    cart$: Observable<any>;

    constructor(private _store: Store<any>) {
        this.cart$ = this._store.select<any>('cart');
    }

    checkout(products) {
        this._store.dispatch({ type: CHECKOUT_REQUEST, payload: products });
    }
}