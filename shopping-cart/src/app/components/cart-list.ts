import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import { Observable, Subject } from 'rxjs';
import {Store, Action} from "@ngrx/store";

import {CartItem} from "./cart-item";
import {ICart} from "../reducers/cart";
import {IProduct} from "../reducers/products";

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