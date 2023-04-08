import React from 'react'
import { type CartStoreShape, type ItemShape, type ItemStoreShape } from '../interfaces'
import { observer } from 'mobx-react-lite'

interface ShoppingCartProps {
  cartStore: CartStoreShape
  itemStore: ItemStoreShape
}

export const ShoppingCart = observer(({ cartStore, itemStore }: ShoppingCartProps): JSX.Element => {
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
        <li key={item.index}>
                    ( {item.index} ) {item.title} - {item.quantity}
          <button type={'button'} onClick={() => { addToCart(item.index) }}>➕</button>
          <button type={'button'} onClick={() => { removeFromCart(item.index) }}>➖</button>
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
