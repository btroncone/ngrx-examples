import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {selectedReddit, postsByReddit} from "./reducers/reddit";

export function main() {
  return bootstrap(App, [
      ELEMENT_PROBE_PROVIDERS,
      provideStore({selectedReddit, postsByReddit})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);