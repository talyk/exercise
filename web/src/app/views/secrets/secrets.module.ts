import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SecretsService } from "src/app/shared/services/api/secrets.service";
import { AddSecretComponent } from "./components/add-secret/add-secret.component";
import { SecretItemComponent } from "./components/secrets-list/secret-item/secret-item.component";
import { SecretsListComponent } from "./components/secrets-list/secrets-list.component";
import { SecretPageComponent } from "./pages";
import { SecretsRoutingModule } from "./secrets-routing.module";
import { SecretsComponent } from "./secrets.component";

@NgModule({
    imports: [
        SecretsRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [SecretsService],
    declarations: [
        SecretsComponent,
        SecretsListComponent,
        SecretItemComponent,
        AddSecretComponent,
        SecretPageComponent
    ]
})
export class SecretsModule { }