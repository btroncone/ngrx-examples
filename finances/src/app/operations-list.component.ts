import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Operation} from "./common/operation.model";




@Component({
  selector: 'operations-list',
  templateUrl: './operations-list.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class OperationsList {
  @Input() operations:Array<Operation>;

  constructor() {}

  @Output() deleteOperation = new EventEmitter();
  @Output() incrementOperation = new EventEmitter();
  @Output() decrementOperation = new EventEmitter();
}
