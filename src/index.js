import React from 'react'
import App from './app/App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/redux/store'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
