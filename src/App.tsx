import React, { useEffect } from 'react'
import Footer from './components/Footer'
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

export const rootStore = createRootStore()

const App = ({ author, copyright, spdx }: AppProps): JSX.Element => {
  useEffect(() => {
    const _getItems = (): void => {
      apiGetItems()
        .then((res) => {
          rootStore.itemStore.setItems(res)
        })
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
        <ShoppingCart />
        <ItemList />
      </div>
      <Footer author={author} copyright={copyright} spdx={spdx} />
    </div>
  )
}

export default App
