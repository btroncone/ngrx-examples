import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import { Subject, Observable } from 'rxjs';
import {Store, Action} from "@ngrx/store";

import {ProductItem} from "./product-item";
import {IProduct} from "../reducers/products";

@Component({
    selector: 'product-list',
    template: `
        Products
        <ul>
            <product-item
                *ngFor="#product of products"
                [product]="product"
                (addToCart)="addToCart.emit($event)">
            </product-item>
        </ul>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ProductItem]
})
export class ProductList {
    @Input() products: IProduct[];    
    @Output() addToCart = new EventEmitter<IProduct>();
}