import { Component, input, OnInit, signal } from '@angular/core';
import { GridStackOptions } from 'gridstack';
import { GridstackComponent, GridstackItemComponent, nodesCB } from 'gridstack/dist/angular';
import { DashboardCardItem } from './dashboard-card-item/dashboard-card-item';
import { EChartsOption } from 'echarts';
import { DashboardWidget } from './models/dashboard.model';

@Component({
    selector: 'app-dashboard-card-list',
    imports: [GridstackComponent, GridstackItemComponent, DashboardCardItem],
    templateUrl: './dashboard-card-list.html',
    styleUrl: './dashboard-card-list.scss',
})
export class DashboardCardList implements OnInit {
    public dashboardList = input.required<EChartsOption[]>();
    public gridOptions: GridStackOptions = {
        margin: 5,
        cellHeight: 100, // Добавьте для контроля высоты
        minRow: 1,
        column: 12, // Стандартное количество колонок
        draggable: {
            handle: '.drag-handle',
        },
    };

    // Преобразованный список виджетов с позициями
    public widgets = signal<DashboardWidget[]>([]);

    public ngOnInit() {
        // Преобразуем входные данные в виджеты с позициями
        this.widgets.set(
            this.dashboardList().map((chartOptions, index) => ({
                id: `widget-${index}-${Date.now()}`, // Уникальный ID
                x: (index * 4) % 12, // Распределяем по колонкам (4 колонки на виджет)
                y: Math.floor(index / 3) * 2, // Ряды по 2 клетки высотой
                w: 12,
                h: 4,
                minW: 3,
                minH: 3,
                chartOptions: chartOptions,
                draggable: {
                    handle: '.drag-handle',
                },
            })),
        );
    }

    // Функция для trackBy
    public identify(index: number, widget: DashboardWidget) {
        return widget.id;
    }

    // Обработчик изменений
    public onChange(data: nodesCB) {
        console.log('Widget positions changed', data.nodes);

        // Обновляем позиции в нашем массиве (опционально)
        data.nodes.forEach((node) => {
            const widget = this.widgets()?.find((w) => w.id === node.id);
            if (widget && node.el) {
                widget.x = node.x;
                widget.y = node.y;
                widget.w = node.w;
                widget.h = node.h;
            }
        });
    }
}
