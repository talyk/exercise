import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'secrets',
        loadChildren: () => import('./views/secrets/secrets.module').then(m => m.SecretsModule)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
