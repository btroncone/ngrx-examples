import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {counter} from "./reducers/counter";

export function main() {
  return bootstrap(App, [
      provideStore({counter})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);