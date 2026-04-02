import { Component, input } from '@angular/core';
import { TabModel } from '../../models/tab.model';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-sidebar-tab',
    imports: [RouterLink],
    templateUrl: './sidebar-tab.component.html',
    styleUrl: './sidebar-tab.component.scss',
})
export class SidebarTabComponent {
    public tab = input.required<TabModel>();
    public isActive = input<boolean>(false);

    public iconPath(): string {
        const iconName = this.isActive() ? this.tab().icon + '-active' : this.tab().icon;
        return `/assets/svg/sidebar-icons/${iconName}.svg`;
    }
}
