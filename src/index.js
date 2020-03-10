import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import storeReducer from './reducers/index';

import { UserProvider } from './containers/UserContext';
import App from './App';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

function loadDefaultStore() {
  return {
    error: {
      hasError: false, 
      errorMessage: ''
    }, 
    todos: [], 
    lists:[]
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
  storeReducer, 
  loadDefaultStore(), 
  composeEnhancers(applyMiddleware(logger, promise))
);

ReactDOM.render(
<Provider store={store}>
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
</Provider>, 
document.getElementById('root')
);

serviceWorker.register();
 