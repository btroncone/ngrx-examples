import {Component} from "angular2/core";
import {AsyncPipe} from "angular2/common";

@Component({
    selector: 'todos',
    template: `
    <div class="content"></div>
    `,
    pipes: [AsyncPipe]
})
export class Todos{}