import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SecretsService } from 'src/app/shared/services/api/secrets.service';

@Injectable()
export class SecretPageResolverService implements Resolve<any> {
    constructor(public secretsService: SecretsService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.secretsService.getSecret(route.params.id);
    }
}