import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyEnum } from '@app/core/enums/currency.enum';

@Pipe({
    name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
    transform(currency: CurrencyEnum | null): string {
        switch (currency) {
            case CurrencyEnum.RUB:
                return '₽';
            case CurrencyEnum.USD:
                return '$';
            case CurrencyEnum.EUR:
                return '€';
            case CurrencyEnum.GBP:
                return '£';
            default:
                return '$';
        }
    }
}
