import { Routes } from '@angular/router';

export const routes: Routes = [
    //{ path: '', loadChildren: () => import('./features/layout/layout.routes').then((c) => c.routes) },
    {
        path: '**',
        redirectTo: '',
    },
];
