import { type ItemShape } from '../interfaces'

const apiGetItems = async (): Promise<ItemShape[]> => {
  return await new Promise((resolve) => {
    resolve([
      { index: 1, title: 'eggs', quantity: 10 },
      { index: 2, title: 'bread', quantity: 10 },
      { index: 3, title: 'milk', quantity: 10 },
      { index: 4, title: 'coffee', quantity: 10 }
    ])
  })
}

export { apiGetItems }
