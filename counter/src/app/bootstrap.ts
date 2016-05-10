import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {counter} from "./reducers/counter";
import {BASIC_LOGGER_MIDDLEWARE} from "./middleware/logger";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

export function main() {
  return bootstrap(App, [
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