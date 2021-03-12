import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecretPageComponent, SecretPageResolverService } from "./pages";
import { SecretsResolverService } from "./secrets-resolver.service";
import { SecretsComponent } from "./secrets.component";

const routes: Routes = [
    {
        path: '',
        component: SecretsComponent,
        resolve: { secretsResponse: SecretsResolverService }
    },
    {
        path: ':id',
        component: SecretPageComponent,
        resolve: { secretResponse: SecretPageResolverService }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        SecretsResolverService,
        SecretPageResolverService
    ],
    exports: [
        RouterModule
    ]
})
export class SecretsRoutingModule { }