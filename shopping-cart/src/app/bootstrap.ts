import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ShoppingCartApp} from './shoppingCart-app';
import {provideStore} from "@ngrx/store";
import {APP_REDUCERS} from "./reducers/reducers";
import {APP_SAGAS} from "./sagas/sagas";
import shopSagas from "./sagas/shop";
import {APP_ACTIONS} from "./actions/actions";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';
import {installSagaMiddleware} from 'store-saga';


export function main() {
  return bootstrap(ShoppingCartApp, [
      ELEMENT_PROBE_PROVIDERS,
      APP_ACTIONS,
      provideStore(APP_REDUCERS),
      installSagaMiddleware(...shopSagas),
      instrumentStore(),
      devtoolsConfig({
          position: 'bottom',
          visible: true,
          size: 0.3
      })
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);