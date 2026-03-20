import { EChartsOption } from 'echarts';

export const cardChartOptions1: EChartsOption = {
    title: {
        text: 'Stacked Area Chart',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
    ],
};

export const defaultChartOptions: EChartsOption = {
    title: {
        text: 'График продаж порно с Колумбиной',
    },
    tooltip: {},
    xAxis: {
        data: ['15.12.2025', '20.12.2025', '25.12.2025', '15.01.2026', '20.01.2026', '25.01.2026', '30.01.2026'],
    },
    yAxis: {},
    series: [
        {
            name: 'Продажи',
            type: 'line', // Тип графика: bar, line, pie и т.д.
            data: [1120, 2200, 3600, 3000, 3402, 1565, 2400],
        },
    ],
};
