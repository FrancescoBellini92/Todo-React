import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import storeReducer from './reducers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';


function loadToDoList() {
    
    if (localStorage.getItem('todoList')) {
        const currentState = JSON.parse(localStorage.getItem('todoList'));
        if (currentState.error.hasError) {
            return([]) 
        } 
        return({...currentState});
    }
    return {
        filter: {
            activeFilter: null
        }, 
        error: {
            hasError: false, 
            errorMessage: ''
        }, 
        todos: [], 
        lists:[]
    };
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(storeReducer, loadToDoList(), 
    composeEnhancers(applyMiddleware(logger, promise)));

store.subscribe( () => {
    if (!store.getState().error.hasError) {
        localStorage.setItem('todoList', JSON.stringify(store.getState()));
    }
})


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, 
document.getElementById('root')
);

serviceWorker.unregister();
