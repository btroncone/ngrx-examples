import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import {ProductItem} from "./product-item";
import {IProduct} from "../reducers/products";
import {ProductsActions} from "../actions/products.actions";

@Component({
    selector: 'product-list',
    template: `
        Products
        <ul>
            <product-item
                *ngFor="#product of products"
                [product]="product"
                (addToCart)="productsAction.addToCart($event)">
            </product-item>
        </ul>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ProductItem]
})
export class ProductList {
    @Input() products: IProduct[];

    constructor(public productsAction: ProductsActions) {
    }

}