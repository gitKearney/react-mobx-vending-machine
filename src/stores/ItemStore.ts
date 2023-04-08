import { makeAutoObservable } from 'mobx'
import { type ItemShape, type ItemStoreShape } from '../interfaces'

export const ItemStore = (): ItemStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[],
    setItems: function (vals: ItemShape[]) {
      this.items = vals
    },
    getItems: function (): ItemShape[] {
      return this.items
    },
    removeItem: function (id: number): void {
      const it = this.items.find((item: ItemShape) => item.id === id)
      if (it != null) {
        it.quantity--
      }
    },
    addItem: function (id: number) {
      const it = this.items.find((item: ItemShape) => item.id === id)
      if (it != null) {
        it.quantity++
      }
    }
  })
}
