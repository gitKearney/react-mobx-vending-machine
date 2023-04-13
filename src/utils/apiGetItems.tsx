import { type ItemShape } from '../interfaces'

const apiGetItems = async (): Promise<ItemShape[]> => {
  return await new Promise((resolve) => {
    resolve([
      { id: 1, title: 'eggs', quantity: 10 },
      { id: 2, title: 'bread', quantity: 10 },
      { id: 3, title: 'milk', quantity: 10 },
      { id: 4, title: 'coffee', quantity: 10 }
    ])
  })
}

export { apiGetItems }
