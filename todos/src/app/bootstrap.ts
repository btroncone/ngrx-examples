import {bootstrap} from '@angular/platform-browser-dynamic';
import {TodoApp} from './todo-app';
import {provideStore} from "@ngrx/store";
import * as APP_REDUCERS from "./reducers/reducers";


export function main() {
  return bootstrap(TodoApp, [
      provideStore(APP_REDUCERS)
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);