import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
    providedIn: 'root',
})
export class Echart {
    refreshChart(options: echarts.EChartsOption, chartElement: HTMLElement) {
        const chart = echarts.getInstanceByDom(chartElement);
        chart?.clear();
        chart?.setOption(options as any);
    }
    getInstance(element: HTMLElement | undefined): echarts.EChartsType | undefined {
        if (!element) return undefined;
        return echarts.getInstanceByDom(element);
    }
}
