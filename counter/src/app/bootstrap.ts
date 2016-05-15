import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {counter} from "./reducers/counter";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

export function main() {
  return bootstrap(App, [
      provideStore({counter}),
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