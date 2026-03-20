import { Component, input } from '@angular/core';
import { TabModel } from '../../models/tab.model';
import { SafeInnerPipe } from '@app/shared/pipes/safe-inner.pipe';

@Component({
    selector: 'app-sidebar-tab',
    imports: [SafeInnerPipe],
    templateUrl: './sidebar-tab.component.html',
    styleUrl: './sidebar-tab.component.scss',
})
export class SidebarTabComponent {
    public tab = input.required<TabModel>();
}
