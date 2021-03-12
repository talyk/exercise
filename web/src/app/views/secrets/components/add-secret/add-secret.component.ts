import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ISecret } from "src/app/shared/models/secret.model";
import { SecretsService } from "src/app/shared/services/api/secrets.service";

@Component({
    selector: 'app-add-secret',
    styleUrls: ['./add-secret.component.scss'],
    templateUrl: './add-secret.component.html'
})
export class AddSecretComponent implements OnInit {
    public secretForm: FormGroup;
    @Output() public newSecret: EventEmitter<ISecret> = new EventEmitter<ISecret>();

    constructor(public formBuilder: FormBuilder, public secretsService: SecretsService) { this.secretForm = new FormGroup({}); }

    ngOnInit(): void {
        this.secretForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            data: ['', [Validators.required]]
        });
    }

    public onSubmit(event: any): void {
        this.secretForm.markAllAsTouched();
        if (this.secretForm.valid) {
            this.secretsService.postSecret(this.secretForm.value).subscribe(response => {
                if (response?.success) {
                    this.newSecret.emit(response.secret as ISecret);
                    this.secretForm.reset();
                }
            });
        }
    }
}