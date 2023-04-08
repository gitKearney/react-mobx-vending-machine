import { makeAutoObservable } from 'mobx'
import { type ItemShape, type ItemStoreShape } from '../interfaces'

export const ItemStore = (): ItemStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[],
    removeItem: function (index: number): void {
      this.items.forEach((storeItem: ItemShape) => {
        if (storeItem.index === index) {
          storeItem.quantity -= 1
        }
      })
    },
    addItem: function (index: number) {
      this.items.forEach((storeItem: ItemShape) => {
        if (storeItem.index === index) {
          storeItem.quantity += 1
        }
      })
    }
  })
}
