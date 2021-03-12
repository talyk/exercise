import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ApiPrefixInterceptor } from "./http/api-prefix.intersceptor";
import { HeaderComponent } from "./layout/header/header.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true
        }
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }