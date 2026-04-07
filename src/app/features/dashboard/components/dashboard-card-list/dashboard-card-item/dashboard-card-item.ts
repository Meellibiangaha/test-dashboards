import { AfterViewInit, Component, ElementRef, input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
    selector: 'app-dashboard-card-item',
    imports: [NgxEchartsDirective],
    templateUrl: './dashboard-card-item.html',
    styleUrl: './dashboard-card-item.scss',
})
export class DashboardCardItem implements AfterViewInit {
    public dashboard = input.required<EChartsOption>();
    public widgetId = input.required<string>();

    private chartInstance: echarts.ECharts | null = null;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        this.initChart();
    }

    private initChart() {
        // Ищем контейнер для графика (добавьте div в шаблон)
        const chartContainer = this.elRef.nativeElement.querySelector('.chart-container');
        if (chartContainer) {
            this.chartInstance = echarts.init(chartContainer);
            this.chartInstance.setOption(this.dashboard());

            // Перерисовка при изменении размера
            const resizeObserver = new ResizeObserver(() => {
                this.chartInstance?.resize();
            });
            resizeObserver.observe(chartContainer);
        }
    }
}
