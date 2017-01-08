import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Operation} from "./common/operation.model";




@Component({
  selector: 'new-operation',
  templateUrl: './new-operation.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class NewOperation {

  public operation:Operation;
  constructor() {
    this.operation = new Operation();
  }

  @Output() addOperation = new EventEmitter();


}
