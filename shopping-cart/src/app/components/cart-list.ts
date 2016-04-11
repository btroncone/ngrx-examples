import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import {CartItem} from "./cart-item";
import {ICart} from "../reducers/cart";
import {IProduct} from "../reducers/products";
import {CartActions} from "../actions/cart.actions";

@Component({
    selector: 'cart-list',
    template: `
        Cart
        <ul *ngIf="cartList">
            <cart-item
                *ngFor="#cartItem of cartList"
                [cartItem]="cartItem">
            </cart-item>
        </ul>
        <button class="pure-button pure-button-primary"
            (click)="cartActions.checkout(cartList)">
            Checkout
         </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [CartItem]
})
export class CartList {
    @Input() cartList: any;

    constructor(public cartActions: CartActions) {

    }
}