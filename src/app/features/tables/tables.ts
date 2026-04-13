import { Component, signal } from '@angular/core';
import { PartialExcept } from '@app/core/types/partial-except.types';
import { TableModel } from './models/table.model';
import { TABLE_LIST_MOCK } from './mock/table-list.mock';
import { CurrencyPipe } from '@app/shared/pipes/currency-pipe';

@Component({
    selector: 'app-tables',
    imports: [CurrencyPipe],
    templateUrl: './tables.html',
    styleUrl: './tables.scss',
})
export class Tables {
    public tableList = signal<PartialExcept<TableModel, 'id'>[]>(TABLE_LIST_MOCK);
}
