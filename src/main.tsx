import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      author={{ first_name: 'Kearney', last_name: 'Taaffe' }}
      copyright={2023}
      spdx={'GPL-3.0-only'} />
  </React.StrictMode>
)
