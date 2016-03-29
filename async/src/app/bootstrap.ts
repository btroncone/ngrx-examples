import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {AsyncApp} from './async-app';
import {provideStore} from "@ngrx/store";
import {selectedReddit, postsByReddit} from "./reducers/reddit";
import {RedditActions} from "./actions/reddit.actions";
import {Reddit} from "./services/reddit";
import {HTTP_PROVIDERS} from "angular2/http";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

export function main() {
  return bootstrap(AsyncApp, [
      ELEMENT_PROBE_PROVIDERS,
      HTTP_PROVIDERS,
      provideStore({selectedReddit, postsByReddit}),
      Reddit,
      RedditActions,
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