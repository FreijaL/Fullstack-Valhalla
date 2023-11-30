import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { legacy_createStore as createStore } from 'redux';
import ingredientReducer from '../src/reducers/ingredientReducer.js';
//import productReducer from './src/reducers/productReducer.js';
import { Provider } from 'react-redux';
//import { productStore } from '../src/store/productStore.js'

const store = createStore(ingredientReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
