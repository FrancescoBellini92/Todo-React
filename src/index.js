import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import storeReducer from './reducers/index';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function loadToDoList() {
    
    if (localStorage.getItem('todoList')) {
        const currentState = JSON.parse(localStorage.getItem('todoList'));
        if (currentState.error.hasError) {
            return([]) 
        } 
        return({...currentState});
    }
    return {filter: {activeFilter: null}, error: {hasError: false, errorMessage: ''}, todos: [], lists:[]} ;
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
