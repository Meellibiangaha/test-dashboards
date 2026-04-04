import { Component, signal } from '@angular/core';
import { pie, cardChartOptions1 } from '@app/core/configs/charts-options';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';
import { EChartsOption } from 'echarts';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import { DashboardGraph } from './components/dashboard-graph/dashboard-graph';

@Component({
    selector: 'app-dashboard',
    imports: [LoaderComponent, NgxEchartsModule, DashboardGraph],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
    providers: [
        {
            provide: NGX_ECHARTS_CONFIG,
            useFactory: () => ({ echarts: () => import('echarts') }),
        },
    ],
})
export class Dashboard {
    public readonly loading = signal(false);

    // Здесь будут опции для графика
    public readonly chartOptions = signal<EChartsOption>(pie);

    public readonly cardChartOptions = signal(cardChartOptions1);
}
