import React from 'react'
import { type ItemShape } from '../interfaces'
import { observer } from 'mobx-react-lite'

interface ItemViewProps {
  item: ItemShape
}

const ItemView = observer(({ item }: ItemViewProps): JSX.Element => {
  return (
    <>
      <li style={{ lineHeight: '2.5rem' }} key={item.id}>
        <span style={{ marginRight: '1rem' }}>{item.title} - {item.quantity}</span>
        {/* @ts-expect-error: item.decrementCount */}
        <button style={{ marginRight: '1rem' }} onClick={() => item.decrementCount()}>➕</button>
      </li>
    </>
  )
})

export { ItemView }
