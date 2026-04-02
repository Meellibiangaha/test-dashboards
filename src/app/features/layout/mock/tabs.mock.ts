import { TabModel } from '../models/tab.model';

export const TABS_MOCK: TabModel[] = [
    {
        icon: 'dashboard-icon',
        name: 'Dashboard',
        link: '/',
        routerOptions: { exact: true },
    },
    {
        icon: 'tables-icon',
        name: 'Tables',
        link: '/tables',
    },
    {
        icon: 'billing-icon',
        name: 'Billing',
        link: 'billing',
    },
    {
        icon: 'rtl-icon',
        name: 'RTL',
        link: 'rtl',
        disabled: true,
    },
    {
        icon: 'profile-icon',
        name: 'Profile',
        link: 'profile',
        disabled: true,
    },
];
