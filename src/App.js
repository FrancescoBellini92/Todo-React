import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';

import {TodoPageContainer} from './containers/TodoPageContainer';
import {ListPageContainer} from './containers/ListPageContainer';
import PrivateRoute from './containers/PrivateRoute';

import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import Logout from './components/Logout';

export default function App () {
  return (
    <ErrorBoundary>
        <Header/>
          <Switch>
            <PrivateRoute  path ="/todos/list/:list" component={TodoPageContainer}  />
            <PrivateRoute  path ="/lists/search/:name" component={ListPageContainer} />
            <PrivateRoute  path ="/lists" component={ListPageContainer} />
            <PrivateRoute  path ="/todos" component={TodoPageContainer} />
            <Route  path ="/login" component={Login} />
            <Route  path ="/logout" component={Logout} />
          </Switch>
    </ErrorBoundary>
  );
}