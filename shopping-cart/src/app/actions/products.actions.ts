import {Injectable} from "angular2/core";
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {products, ADD_TO_CART, REQUEST_PRODUCTS, IProduct} from "../reducers/products";

@Injectable()
export class ProductsActions {

    products$: Observable<any>;

    constructor(private _store: Store<any>) {
        const store$ = this._store.select<any>('products');
        this.products$ = store$.map(res => Object.keys(res).map(key => res[key]));
    }

    getProducts() {
        this._store.dispatch({ type: REQUEST_PRODUCTS });
    }

    addToCart(product: IProduct) {
        this._store.dispatch({ type: ADD_TO_CART, payload: product.id });
    }
}