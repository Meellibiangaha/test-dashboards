import { Component, inject, OnInit, signal } from '@angular/core';
import { PartialExcept } from '@app/core/types/partial-except.types';
import { TableModel } from './models/table.model';
import { TABLE_LIST_MOCK } from './mock/table-list.mock';
import { Test } from '@app/core/services/test';
import { CurrencyPipe } from '@app/shared/pipes/currency-pipe';

@Component({
    selector: 'app-tables',
    imports: [CurrencyPipe],
    templateUrl: './tables.html',
    styleUrl: './tables.scss',
})
export class Tables implements OnInit {
    private testService = inject(Test);
    ngOnInit(): void {
        console.log(this.testService.testData);
    }
    public tableList = signal<PartialExcept<TableModel, 'id'>[]>(TABLE_LIST_MOCK);
}
