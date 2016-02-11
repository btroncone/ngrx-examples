import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {AsyncApp} from './async-app';
import {provideStore} from "@ngrx/store";
import {postsByReddit, selectedReddit } from "./reducers/reddit";
import {RedditActions} from "./actions/reddit.actions";
import {Reddit} from "./services/reddit";
import {HTTP_PROVIDERS} from "../../../counter/node_modules/angular2/http";


export function main() {
  return bootstrap(AsyncApp, [
      ELEMENT_PROBE_PROVIDERS,
      HTTP_PROVIDERS,
      RedditActions,
      Reddit,
      provideStore({postsByReddit, selectedReddit})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);