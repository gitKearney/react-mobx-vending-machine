import { type RootStoreShape } from '../interfaces'
import { ItemStore } from './ItemStore'
import { CartStore } from './CartStore'

export const createRootStore = (): RootStoreShape => ({
  itemStore: ItemStore(),
  cartStore: CartStore()
})
