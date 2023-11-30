import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/productSlice.js'
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    productSlice: productSlice,
  },
});

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
