import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ISecret } from "src/app/shared/models/secret.model";
import { SecretsService } from "src/app/shared/services/api/secrets.service";

@Component({
    selector: 'app-secrets-list',
    styleUrls: ['./secrets-list.component.scss'],
    templateUrl: './secrets-list.component.html'
})
export class SecretsListComponent {
    @Input() public secrets: ISecret[] = [];
    @Output() public deletedSecret: EventEmitter<ISecret> = new EventEmitter<ISecret>();

    constructor(public secretsService: SecretsService) {}
    
    onDeleteSecret(secret: ISecret): void {
        this.secretsService.deleteSecret(secret.id).subscribe(res =>{
            if (res?.success) this.deletedSecret.emit(secret); 
        });
    }
}