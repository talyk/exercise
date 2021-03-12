import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-secret-item',
    styleUrls: ['./secret-item.component.scss'],
    templateUrl: './secret-item.component.html'
})
export class SecretItemComponent {
    @Input() public name: string = '';
    @Input() public value: string = '';
}