import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AsyncApp} from './async-app';
import {RedditEffects} from "./effects/reddit-effects";
import {provideStore, combineReducers} from "@ngrx/store";
import {runEffects} from "@ngrx/effects";
import {selectedReddit, postsByReddit} from "./reducers/reddit";
import {Reddit} from "./services/reddit";
import {storeLogger} from "ngrx-store-logger";

export function main() {
  return bootstrap(AsyncApp, [
      HTTP_PROVIDERS,
      provideStore(
        storeLogger()(combineReducers({selectedReddit, postsByReddit}))
      ),
      runEffects(RedditEffects),
      Reddit
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);