import { CurrencyEnum } from "@app/core/enums/currency.enum"

export type TableModel = {
  id: number,
  price: number,
  currency: CurrencyEnum
}
