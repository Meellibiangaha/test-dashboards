import { Component, ElementRef, HostListener, inject, input, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Echart } from '@app/core/services/echart';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
    selector: 'app-dashboard-graph',
    imports: [NgxEchartsDirective],
    templateUrl: './dashboard-graph.html',
    styleUrl: './dashboard-graph.scss',
})
export class DashboardGraph implements OnInit, OnDestroy {
    private echarts = inject(Echart);

    public chartElement = viewChild<ElementRef<HTMLElement>>('cart');

    public graphData = input.required<EChartsOption>();

    private resizeObserver: ResizeObserver | undefined;
    private sidebarElement: Element | null = null;

    @HostListener('window:resize')
    updateOnWindowResize(): void {
        const instance = this.echarts.getInstance(this.chartElement()?.nativeElement);
        instance?.resize();
    }

    ngOnInit(): void {
        this.sidebarElement = document.querySelector('app-sidebar-menu .sidebar');

        if (this.sidebarElement) {
            // Добавлена проверка на null
            this.resizeObserver = new ResizeObserver(() => {
                const instance = this.echarts.getInstance(this.chartElement()?.nativeElement); // Исправлен вызов viewChild
                instance?.resize();
            });
            this.resizeObserver.observe(this.sidebarElement);
        }
    }
    ngOnDestroy(): void {
        if (this.resizeObserver && this.sidebarElement) {
            this.resizeObserver.unobserve(this.sidebarElement);
            this.resizeObserver.disconnect();
        }
    }
}
