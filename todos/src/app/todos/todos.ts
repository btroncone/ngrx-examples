import {Component, ChangeDetectionStrategy} from "angular2/core";
import {AsyncPipe} from "angular2/common";
import {TodosVm} from "./todos-vm";

@Component({
    selector: 'todos',
    template: `
    <div class="content"></div>
    `,
    pipes: [AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Todos{
    constructor(public todosVm : TodosVm){}
}