import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {counter} from "./reducers/counter";
import {BASIC_LOGGER_MIDDLEWARE} from "./middleware/logger";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

export function main() {
  return bootstrap(App, [
      ELEMENT_PROBE_PROVIDERS,
      provideStore({counter}),
      ...BASIC_LOGGER_MIDDLEWARE,
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