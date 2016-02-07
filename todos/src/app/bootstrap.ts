import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {App} from './app';
import {provideStore} from "@ngrx/store";
import {todos} from "./reducers/todos";
import {visibilityFilter} from "./reducers/visibility-filter";
import {TodosActions} from "./actions/todos.actions";
import {VisibilityFilterActions} from "./actions/visibility-filter.actions";
import {TodosViewModel} from "./todos/todos-viewmodel";

export function main() {
  return bootstrap(App, [
      ELEMENT_PROBE_PROVIDERS,
      TodosActions,
      VisibilityFilterActions,
      TodosViewModel,
      provideStore({todos, visibilityFilter})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);