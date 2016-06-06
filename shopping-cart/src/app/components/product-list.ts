import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

import {ProductItem} from './product-item';
import {IProduct} from '../reducers/products';

@Component({
    selector: 'product-list',
    template: `
        Products
        <ul>
            <product-item
                *ngFor="let product of products"
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