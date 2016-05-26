import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AsyncApp} from './async-app';
import {provideStore} from "@ngrx/store";
import {selectedReddit, postsByReddit} from "./reducers/reddit";
import {RedditActions} from "./actions/reddit.actions";
import {Reddit} from "./services/reddit";

export function main() {
  return bootstrap(AsyncApp, [
      HTTP_PROVIDERS,
      provideStore({selectedReddit, postsByReddit}),
      Reddit,
      RedditActions
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);