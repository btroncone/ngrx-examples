import {productSelector} from './product.selector';
import { Observable } from 'rxjs';

let STORE_SLICE_NAME = 'cart';

export const cartSelector = (store: any) => store.select(STORE_SLICE_NAME);

export const calculatedCartList = (store: any) => Observable
    .combineLatest(store.let(cartSelector), store.let(productSelector))
    .map((res: any) => {
        return res[0].productIds.map(productId => {
            return {
                title: res[1][productId].title,
                price: res[1][productId].price,
                quantity: res[0].quantityById[productId]
            };
        });
    });