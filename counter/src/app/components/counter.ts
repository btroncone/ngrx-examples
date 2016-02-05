import {Component} from "angular2/core";
import {AsyncPipe} from "angular2/common";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'counter',
    template: `
    <div class="content">
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <button (click)="incrementIfOdd()">Increment If Odd</button>
        <button (click)="incrementAsync()">Increment Async</button>
        <h3>{{count}}</h3>
    </div>
    `,
    pipes: [AsyncPipe]
})
export class Counter{
    counter$: Subscription<number>;
    count: number;

    constructor(
        private store : Store<number>
    ){
        //For the most basic example I am not using async pipe
        this.counter$ = this.store
            .select('counter')
            .subscribe((value : number) => this.count = value);
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

    incrementIfOdd(){
        if(this.count % 2 !== 0){
            this.store.dispatch({type: 'INCREMENT'});
        }
    }
}