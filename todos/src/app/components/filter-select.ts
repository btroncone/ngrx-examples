import {Component, Output, Input, EventEmitter} from "@angular/core";
import {Todo} from "../common/interfaces";

@Component({
    selector: 'filter-select',
    template: `
      <div>
        <select #selectList (change)="filterSelect.emit(selectList.value)">
            <option *ngFor="let filter of filters" value="{{filter.action}}">
                {{filter.friendly}}
            </option>
        </select>
      </div>
    `
})
export class FilterSelect{
    public filters = [
        {friendly: "All", action: 'SHOW_ALL'},
        {friendly: "Completed", action: 'SHOW_COMPLETED'},
        {friendly: "Active", action: 'SHOW_ACTIVE'}
    ];
    @Output() filterSelect: EventEmitter<string> = new EventEmitter<string>();
}