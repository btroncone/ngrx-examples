import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {CartItem} from './cart-item';

@Component({
    selector: 'cart-list',
    template: `
        Cart
        <ul *ngIf="cartList">
            <cart-item
                *ngFor="let cartItem of cartList"
                [cartItem]="cartItem">
            </cart-item>
        </ul>
        <button class="pure-button pure-button-primary"
            (click)="checkout.emit($event)">
            Checkout
         </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [CartItem]
})
export class CartList {
    @Input() cartList: any;
    @Output() checkout = new EventEmitter<any>();
}