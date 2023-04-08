import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import { type ItemShape } from './interfaces'
import { apiGetItems } from './utils/apiGetItems'
import { ShoppingCart } from './components/ShoppingCart'
import { ItemList } from './components/ItemList'
import { createRootStore } from './stores/RootStore'

interface AppProps {
  author: {
    first_name: string
    last_name: string
  }
  spdx: string
  copyright: number
}

const App = ({ author, copyright, spdx }: AppProps): JSX.Element => {
  const [items, setItems] = useState<ItemShape[]>([])

  const rootStore = createRootStore()

  if (items.length > 0) {
    rootStore.itemStore.items = items
  }

  useEffect(() => {
    const _getItems = (): void => {
      apiGetItems()
        .then(setItems)
        .catch((err) => {
          console.log('whoops!', err)
        })
    }

    _getItems()
  }, [])

  console.log('re-rendering App component')
  return (
    <div>
      <h1>Vite + React + MobX</h1>
      <hr />
      <div className="flex-container">
        <ShoppingCart cartStore={rootStore.cartStore} itemStore={rootStore.itemStore} />
        <ItemList rootStore={rootStore} />
      </div>
      <Footer author={author} copyright={copyright} spdx={spdx} />
    </div>
  )
}

export default App
