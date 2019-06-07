import '@babel/polyfill'
import React from 'react'
import App from './app/App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import './sass/base.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
