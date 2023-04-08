import React from 'react'
import { type CartStoreShape, type ItemShape, type ItemStoreShape } from '../interfaces'
import { observer } from 'mobx-react-lite'
import { rootStore } from '../App'

export const ShoppingCart = observer((): JSX.Element => {
  const { cartStore, itemStore }: { cartStore: CartStoreShape, itemStore: ItemStoreShape } =
      rootStore

  const addToCart = (itemIndex: number): void => {
    cartStore.incrementCount(itemIndex)
    itemStore.removeItem(itemIndex)
  }

  const removeFromCart = (itemIndex: number): void => {
    cartStore.decrementCount(itemIndex)
    itemStore.addItem(itemIndex)
  }

  const renderCart = (): JSX.Element => {
    if (cartStore.items.length === 0) {
      return (<p>No items in cart</p>)
    }

    const li = cartStore.items.map((item: ItemShape) => {
      return (
        <li key={item.id}>
                    ( {item.id} ) {item.title} - {item.quantity}
          <button type={'button'} onClick={() => { addToCart(item.id) }}>➕</button>
          <button type={'button'} onClick={() => { removeFromCart(item.id) }}>➖</button>
        </li>
      )
    })

    return (<ul>{li}</ul>)
  }

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <div>
        {renderCart()}
      </div>
    </div>
  )
})
