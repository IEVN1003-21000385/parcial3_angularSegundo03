import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'formularios',
        loadChildren:() => import('./formularios/formularios.routes').then(m=>m.default),
    },
    {
        path: 'utl',
        loadChildren:() => import('./utl/utl.routes').then(m=>m.default),
    }

];
