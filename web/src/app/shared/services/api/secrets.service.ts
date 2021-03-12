import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDeleteSecretResponse, IGetSecretResponse, IListSecretsResponse, IPostSecretResponse } from "../../models/http-responses/secrets";
import { ISecret } from "../../models/secret.model";

const routes = {
    listSecrets: '/api/secrets',
    getSecret: (id: string) => `/api/secrets/${id}`,
    saveSecret: '/api/secrets',
    deleteSecret: (id: string) => `/api/secrets/${id}`,
};

@Injectable()
export class SecretsService {

    constructor(public httpClient: HttpClient) { }

    public listSecrets(): Observable<IListSecretsResponse> {
        return this.httpClient.get<IListSecretsResponse>(routes.listSecrets, {});
    }

    public getSecret(id: string): Observable<IGetSecretResponse> {
        return this.httpClient.get<IGetSecretResponse>(routes.getSecret(id));
    }

    public postSecret(secret: ISecret): Observable<IPostSecretResponse> {
        return this.httpClient.post<IPostSecretResponse>(routes.saveSecret, secret);
    }

    public deleteSecret(id: string): Observable<IDeleteSecretResponse> {
        return this.httpClient.delete<IDeleteSecretResponse>(routes.deleteSecret(id));
    }

}