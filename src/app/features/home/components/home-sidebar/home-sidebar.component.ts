import { Component, signal } from '@angular/core';
import { SidebarTabComponent } from './components/sidebar-tab/sidebar-tab.component';
import { TABS_MOCK } from './mock/tabs.mock';
import { TabModel } from './models/tab.model';

@Component({
    selector: 'app-home-sidebar',
    imports: [SidebarTabComponent],
    templateUrl: './home-sidebar.component.html',
    styleUrl: './home-sidebar.component.scss',
})
export class HomeSidebarComponent {
    public tabs = signal<TabModel[]>(TABS_MOCK);

    public activeTabIndex = signal<number | null>(0);

    public changeTab(index: number): void {
        this.activeTabIndex.set(index);
    }
}
