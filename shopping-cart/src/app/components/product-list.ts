import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import { Subject, Observable } from 'rxjs';
import {Store, Action} from "@ngrx/store";

import {ProductItem} from "./product-item";
import {IProduct} from "../reducers/products";
import {addToCart} from "../actions/products";

@Component({
    selector: 'product-list',
    template: `
        Products
        <ul>
            <product-item
                *ngFor="#product of products"
                [product]="product"
                (addToCart)="addToCartAction.next($event)">
            </product-item>
        </ul>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ProductItem]
})
export class ProductList {
    @Input() products: IProduct[];
    addToCartAction = new Subject<IProduct>();

    constructor(public store: Store<any>) {
        this.addToCartAction
            .map(addToCart)
            .subscribe(store);
    }
}