import * as React from 'react'
import { createRoot, Root as RootType } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { App } from './App'

import 'helpers/i18next/i18next'

const container: HTMLElement = document.getElementById('root')!
const root: RootType = createRoot(container)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
