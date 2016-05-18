import {bootstrap} from '@angular/platform-browser-dynamic';
import {TodoApp} from './todo-app';
import {provideStore} from "@ngrx/store";
import * as APP_REDUCERS from "./reducers/reducers";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';


export function main() {
  return bootstrap(TodoApp, [
      provideStore(APP_REDUCERS),
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