import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                title: 'Дашборды',
                loadComponent: () => import('../dashboard/dashboard').then((c) => c.Dashboard),
            },
            {
                path: 'tables',
                title: 'tables',
                loadComponent: () => import('../tables/tables').then((c) => c.Tables),
            },
        ],
    },
];
