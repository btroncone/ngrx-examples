/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import {Operation} from "./common/operation.model";
import {State, Store} from "@ngrx/store";
import {ADD_OPERATION, REMOVE_OPERATION, INCREMENT_OPERATION, DECREMENT_OPERATION} from "./common/operations";


@Component({
  selector: 'app-root',
  template: `<div class="container">
      <new-operation (addOperation)="addOperation($event)"></new-operation>
      <operations-list [operations]="operations | async"  
      (deleteOperation)="deleteOperation($event)"
      (incrementOperation)="incrementOperation($event)"
      (decrementOperation)="decrementOperation($event)"></operations-list>
</div>

`
})
export class AppComponent {

  public id:number = 0 ; //simulating IDs
  public operations:Array<Operation>;


  constructor(private _store: Store<State>) {
    this.operations = _store.select('operations')

  }


  addOperation(operation) {
    this._store.dispatch({type: ADD_OPERATION , payload: {
      id: ++ this.id,//simulating ID increments
      reason: operation.reason,
      amount: operation.amount
    }});
  }

  incrementOperation(operation){
    this._store.dispatch({type: INCREMENT_OPERATION, payload: operation})
  }

  decrementOperation(operation) {
    this._store.dispatch({type: DECREMENT_OPERATION, payload: operation})
  }


  deleteOperation(operation) {
    this._store.dispatch({type: REMOVE_OPERATION, payload: operation})
  }



}


