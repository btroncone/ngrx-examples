import {Component, ChangeDetectionStrategy} from "angular2/core";
import {AsyncPipe} from "angular2/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'counter',
    template: `
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">Counter</h2>
        </header>
        <div class="content">
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
            <button (click)="incrementAsync()">Increment Async</button>
            <h3>{{counter$ | async}}</h3>
        </div>
    </section>
    `,
    pipes: [AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter{
    counter$: Observable<number>;

    constructor(
        private store : Store<number>
    ){}

    ngOnInit(){
        this.counter$ = this.store
            .select('counter');
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
}