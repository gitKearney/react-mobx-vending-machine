import { type CartStoreShape, type ItemShape } from '../interfaces'
import { makeAutoObservable } from 'mobx'

export const CartStore = (): CartStoreShape => {
  return makeAutoObservable(
    {
      items: [] as ItemShape[], // these items are separate from the item store
      addItem: function (index: number, title: string) {
        let indexOf: number = -1
        this.items.forEach((item) => {
          if (indexOf < 0) {
            if (item.index === index) {
              indexOf = index
              item.quantity += 1
            }
          }
        })

        if (indexOf < 0) {
          this.items.push({ title, index, quantity: 1 })
        }
      },
      decrementCount: function (itemIndex: number) {
        this.items.forEach((item) => {
          if (item.index === itemIndex) {
            item.quantity -= 1
          }
        })
      },
      incrementCount: function (itemIndex: number) {
        this.items.forEach((item) => {
          if (item.index === itemIndex) {
            item.quantity += 1
          }
        })
      }
    }
  )
}
