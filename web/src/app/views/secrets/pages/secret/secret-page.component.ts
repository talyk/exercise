import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISecret } from "src/app/shared/models/secret.model";

@Component({
    selector: 'app-secret-page',
    styleUrls: ['./secret-page.component.scss'],
    templateUrl: './secret-page.component.html'
})
export class SecretPageComponent {
    public secret: ISecret = {name: '', data: '', id: ''};

    constructor(private route: ActivatedRoute){}

    public ngOnInit(): void {
        this.secret = this.route.snapshot.data.secretResponse.secret;
    }
}