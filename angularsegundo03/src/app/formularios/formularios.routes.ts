import { Routes } from '@angular/router';

export default [
    {
        path: 'distancia',
        loadComponent: () => import('./distancia/distancia.component').then((m) => m.DistanciaComponent),
    },
    {
        path: 'zodiaco',
        loadComponent: () => import('./zodiaco/zodiaco.component').then((m) => m.ZodiacoComponent),
    },
    {
        path: 'axb',
        loadComponent: () => import('./axb/axb.component').then((m) => m.AxbComponent),
    }
] as Routes;