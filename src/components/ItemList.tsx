import React from 'react'
import { type RootStoreShape } from '../interfaces'
import { observer } from 'mobx-react-lite'

interface ItemList2Props {
  rootStore: RootStoreShape
}

export const ItemList = observer(({ rootStore }: ItemList2Props): JSX.Element => {
  const { itemStore, cartStore }: RootStoreShape = rootStore

  const addItemToCart = (itemIndex: number, itemTitle: string): void => {
    itemStore.removeItem(itemIndex)
    cartStore.addItem(itemIndex, itemTitle)
  }

  const renderItems = (): JSX.Element => {
    if (itemStore.items.length === 0) {
      return (<></>)
    }

    const li = itemStore.items.map((i) => (
      <li key={i.index}>
        {i.index}) {i.title} - {i.quantity}
        <span style={{ marginLeft: '1rem' }}>
          <button type="button" onClick={() => { addItemToCart(i.index, i.title) } }>✅</button>
        </span>
      </li>
    ))

    return (
      <ul>
        {li}
      </ul>
    )
  }

  return (
    <div>
      <h1>Item List</h1>
      {renderItems()}
    </div>
  )
})
