import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

import { randomData } from '../helpers/random-data.helper';

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

export const pie: EChartsOption = {
    backgroundColor: 'transparent',
    title: {
        text: 'Доля Стран покупающих фигурки с Колумбиной',
        left: 'center',
        top: 0,
        textStyle: {
            color: '#535ae4',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            return `${params.marker} ${params.name}: ${params.value}млн$`;
        },
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1],
        },
    },
    series: [
        {
            name: 'Оценка в млн$',
            type: 'pie',
            radius: '80%',
            center: ['50%', '55%'],
            data: [
                { value: 335, name: 'Япония' },
                { value: 400, name: 'Китай' },
                { value: 274, name: 'Америка' },
                { value: 310, name: 'Корея' },
                { value: 235, name: 'Страны СНГ' },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                color: 'rgba(227, 229, 255, 0.9)',
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(118, 122, 180, 0.9)',
                },
                smooth: 0.2,
                length: 10,
                length2: 25,
            },
            itemStyle: {
                color: '#0075FF',
                shadowBlur: 200,
                shadowColor: 'rgba(100, 3, 180, 0.7)',
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            },
        },
    ],
};

export const defaultChartOptions: EChartsOption = {
    title: {
        text: 'График продаж фигурок с Колумбиной',
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

export const largeAreaScaleOptions: EChartsOption = {
    tooltip: {
        trigger: 'axis',
        position: function (pt: any[]) {
            return [pt[0], '10%'];
        },
    },
    title: {
        left: 'center',
        text: 'Large Area Chart',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: randomData(),
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10,
        },
        {
            start: 0,
            end: 10,
        },
    ],
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)',
                    },
                ]),
            },
            data: randomData(),
        },
    ],
};
