import { IsActiveMatchOptions } from '@angular/router';

export interface TabModel {
    name: string;
    icon: string;
    link: string;
    disabled?: boolean;
    routerOptions?: { exact: boolean } | IsActiveMatchOptions;
}
