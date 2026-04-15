import { CurrencyEnum } from '@app/core/enums/currency.enum';

export interface TableModel {
    id: number;
    price: number;
    currency: CurrencyEnum;
}
