import { IsActiveMatchOptions } from "@angular/router";

export type TabModel = {
    name: string;
    icon: string;
    link: string;
    disabled?: boolean;
    routerOptions?: { exact: boolean } | IsActiveMatchOptions;
};
