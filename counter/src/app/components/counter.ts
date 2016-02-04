import {Component} from "angular2/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'todo-item',
    template: `
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">Counter</h2>
        </header>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <h3></h3>
    </section>
    `
})
export class Counter{
    counter: Observable<number>;

    constructor(
        private store : Store<number>
    ){}

    increment(){

    }

    decrement(){

    }
}