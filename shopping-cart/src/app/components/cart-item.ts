import {Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from "angular2/core";

@Component({
    selector: 'cart-item',
    template: `
    <li class="margin-t-20">
        {{cartItem.title}} - \${{cartItem.price}} x {{cartItem.quantity}}
    </li>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItem {
    @Input() cartItem: any;
}