/**
 * Mocking client-server processing
 */
import {jsonProducts} from './productsJSON';
import { Observable } from 'rxjs/Observable';

const TIMEOUT = 100

export default {
    getProducts(timeout) {
        return Observable.interval(timeout || TIMEOUT)
            .take(1)
            .map(() => jsonProducts);
    },

    buyProducts(payload, timeout) {
         return Observable.interval(timeout || TIMEOUT)
            .take(1)
            .map(() => true);
    }
}
