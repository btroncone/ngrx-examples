import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AsyncApp} from './async-app';
import {provideStore} from "@ngrx/store";
import {selectedReddit, postsByReddit} from "./reducers/reddit";
import {RedditActions} from "./actions/reddit.actions";
import {Reddit} from "./services/reddit";
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

export function main() {
  return bootstrap(AsyncApp, [
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