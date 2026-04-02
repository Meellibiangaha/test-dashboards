import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then((c) => c.Home) },
    { path: 'tables', loadComponent: () => import('./features/tables/tables').then((c) => c.Tables) },
    {
        path: '**',
        redirectTo: '',
    },
];
