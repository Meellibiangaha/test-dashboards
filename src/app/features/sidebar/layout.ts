import { Component, signal } from '@angular/core';
import { SidebarTabComponent } from './components/sidebar-tab/sidebar-tab.component';
import { TABS_MOCK } from './mock/tabs.mock';
import { TabModel } from './models/tab.model';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
    selector: 'app-layout',
    imports: [SidebarTabComponent, RouterOutlet],
    templateUrl: './layout.html',
    styleUrl: './layout.scss',
})
export class LayoutComponent {
    public tabs = signal<TabModel[]>(TABS_MOCK);

    public activeTabIndex = signal<number | null>(0);

    public changeTab(index: number): void {
        this.activeTabIndex.set(index);
    }
}
