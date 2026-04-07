import { EChartsOption } from 'echarts';
import { GridStackWidget } from 'gridstack';

export type DashboardWidget = GridStackWidget & {
    id: string;
    chartOptions: EChartsOption;
    title?: string;
};
