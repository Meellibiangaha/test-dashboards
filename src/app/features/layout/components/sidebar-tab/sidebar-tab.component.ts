import { Component, input } from '@angular/core';
import { TabModel } from '../../models/tab.model';
import { isActive, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar-tab',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './sidebar-tab.component.html',
    styleUrl: './sidebar-tab.component.scss',
})
export class SidebarTabComponent {
    public tab = input.required<TabModel>();

    public iconPath(isActive: boolean): string {
        const iconName = isActive ? this.tab().icon + '-active' : this.tab().icon;
        return `/assets/svg/sidebar-icons/${iconName}.svg`;
    }
}
