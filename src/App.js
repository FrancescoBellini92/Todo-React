import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {TodoPageContainer} from './containers/TodoPageContainer';
import {DetailsPageContainer} from './containers/DetailsPageContainer';
import {ListPageContainer} from './containers/ListPageContainer';
import PrivateRoute from './containers/PrivateRoute';

import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import Logout from './components/Logout';

export default function App () {
  return (
    <ErrorBoundary>
      <Switch>
        <PrivateRoute  path ="/todos/list/:list" component={TodoPageContainer}  />
        <PrivateRoute  path ="/details/:todo" component={DetailsPageContainer}  />
        <PrivateRoute  path ="/search/:name" component={ListPageContainer} />
        <Route  path ="/login" component={Login} />
        <Route  path ="/logout" component={Logout} />
        <PrivateRoute  path ="/" component={ListPageContainer} />
      </Switch>
    </ErrorBoundary>
  );
}
