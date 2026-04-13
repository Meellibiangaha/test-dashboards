/** Делает поле/поля обязательными */

export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/** Пример использования
 *  public productList = signal<PartialExcept<ProductListModel, 'id'>[]>([])
 */
