import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/index';
import { ShoppingCartApp } from './shoppingCart-app';
import { provideStore } from '@ngrx/store';
import reducer from './reducers';
import effects from './effects';
import { runEffects } from '@ngrx/effects';


export function main() {
    return bootstrap(ShoppingCartApp, [
        ELEMENT_PROBE_PROVIDERS,
        provideStore(reducer),
        runEffects(effects),
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);