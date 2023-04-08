export interface CartStoreShape {
  items: ItemShape[]
  incrementCount: (index: number) => void
  decrementCount: (index: number) => void
  addItem: (index: number, title: string) => void
}

export interface ItemShape {
  title: string
  quantity: number
  index: number
}

export interface RootStoreShape {
  itemStore: ItemStoreShape
  cartStore: CartStoreShape
}

export interface ObsItem {
  title: string
  quantity: number
  index: number
  decrementCount: () => void
  incrementCount: () => void
}

export interface ItemStoreShape {
  items: ItemShape[]
  removeItem: (index: number) => void
  addItem: (index: number) => void
}
