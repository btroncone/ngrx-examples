import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {TodoApp} from './todo-app';
import {provideStore} from "@ngrx/store";
import {APP_REDUCERS} from "./reducers/reducers";
import {APP_ACTIONS} from "./actions/actions";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';


export function main() {
  return bootstrap(TodoApp, [
      ELEMENT_PROBE_PROVIDERS,
      APP_ACTIONS,
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