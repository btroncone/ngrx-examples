import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {AsyncApp} from './async-app';
import {provideStore} from "@ngrx/store";
import {postsByReddit, selectedReddit } from "./reducers/reddit";
import {APP_ACTIONS} from "./actions/actions";


export function main() {
  return bootstrap(AsyncApp, [
      ELEMENT_PROBE_PROVIDERS,
      APP_ACTIONS,
      provideStore({postsByReddit, selectedReddit})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);