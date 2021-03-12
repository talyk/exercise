import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ISecret } from "src/app/shared/models/secret.model";

@Component({
    selector: 'app-secrets',
    styleUrls: ['./secrets.component.scss'],
    templateUrl: './secrets.component.html'
})
export class SecretsComponent implements OnInit {
    private _secrets: ISecret[] = [];

    public filter: FormControl = new FormControl('');

    public get secrets(): ISecret[] {
        return this._secrets.filter(secret => secret.name.includes(this.filter.value));
    }

    constructor(private route: ActivatedRoute){}
    
    public ngOnInit(): void {
        this._secrets = this.route.snapshot.data.secretsResponse.secrets;
    }

    public onNewSecret(event: ISecret): void {
        this._secrets.unshift(event);
    }

    public onDeleteSecret(event: any): void {
        this._secrets.splice(this._secrets.indexOf(event), 1);
    }
}