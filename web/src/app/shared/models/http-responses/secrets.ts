import { ISecret } from "../secret.model";
import { IBaseResponse } from "./base-response";

export interface IListSecretsResponse extends IBaseResponse {
    secrets: ISecret[];
}

export interface IGetSecretResponse extends IBaseResponse {
    secret: ISecret;
}

export interface IDeleteSecretResponse extends IGetSecretResponse {
    
}

export interface IPostSecretResponse extends IGetSecretResponse {
    secret: ISecret;
}
