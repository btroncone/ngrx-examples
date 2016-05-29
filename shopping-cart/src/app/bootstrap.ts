import {bootstrap} from '@angular/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser/index';
import {ShoppingCartApp} from './shoppingCart-app';
import {provideStore} from "@ngrx/store";
import {APP_REDUCERS} from "./reducers/reducers";
import {APP_EFFECTS} from "./effects/effects";
import { runEffects } from '@ngrx/effects';


export function main() {
  return bootstrap(ShoppingCartApp, [
      ELEMENT_PROBE_PROVIDERS,
      provideStore(APP_REDUCERS),
      runEffects(...APP_EFFECTS),
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);