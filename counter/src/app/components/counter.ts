import {Component, ChangeDetectionStrategy} from "angular2/core";
import {AsyncPipe} from "angular2/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'counter',
    template: `
    <div class="content">
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <button (click)="incrementAsync()">Increment Async</button>
        <button (click)="decrementAsync()">Decrement Async</button>
        <h3>{{counter$ | async}}</h3>
    </div>
    `,
    pipes: [AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter{
    counter$: Observable<number>;

    constructor(
        private store : Store<number>
    ){
        this.counter$ = this.store.select('counter')
    }

    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }

    incrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'INCREMENT'});
        }, 1000);
    }

    decrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'DECREMENT'});
        }, 1000);
    }
}