import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy
} from "@angular/core";

@Component({
    selector: 'refresh-button',
    template: `
    <button (click)="invalidateReddit.emit(selectedReddit)">
        Refresh {{selectedReddit}} Posts
    </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshButton {
    @Input() selectedReddit : string;
    @Output() invalidateReddit: EventEmitter<string> = new EventEmitter<string>();
}