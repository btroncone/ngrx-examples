import {Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from '@angular/core';
import {IProduct} from '../reducers/products';

@Component({
    selector: 'product-item',
    template: `
    <li class="margin-t-20">
        <div>{{product.title}} - {{product.price}}</div>
        <button class="pure-button pure-button-primary"
            (click)="addToCart.emit(product)"
            [disabled]="product.inventory < 1">
            {{product.inventory < 1 ? "Out of Stock" : "Add to Cart"}}
        </button>
    </li>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
    @Input() product: IProduct;
    @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
}