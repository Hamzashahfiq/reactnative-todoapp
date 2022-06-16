import React from 'react'
import { Store } from './src/config/Store'
import { Provider } from 'react-redux'
import Navigation from './src/navigation/Navigation'

export default function App() {
  return (
    <Provider store = {Store}>
      <Navigation />
    </Provider>

  )
}