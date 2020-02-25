import React from 'react';

import {connect} from 'react-redux';

import {Route, Switch} from 'react-router-dom';

import {getTodo, getFilter, getLists} from './actions/index';

import Navbar from './components/header';
import ErrorBoundary from './components/ErrorBoundary';

import {todosContainer as TodosContainer} from './containers/todosContainer';
import {listsContainer as ListsContainer} from './containers/listsContainer';
import {footerContainer as FooterContainer} from './containers/footerContainer';
import PrivateRoute from './containers/privateRoute';
import { UserProvider } from './containers/userContext';
import Login from './components/login';
import Logout from './components/logout';

class App extends React.Component {
  componentDidMount() {
    this.props.getTodo();
    this.props.getLists();
  }

  render () {
    return (
      <UserProvider>
        <header>
          <Navbar/>
        </header>
        <main className="container mb-5 pb-5"> 
          <ErrorBoundary>
            <Switch>
              <PrivateRoute  path ="/lists/:list/todos" component={TodosContainer}  />
              <PrivateRoute  path ="/lists" component={ListsContainer} />
              <PrivateRoute  path ="/todos" component={TodosContainer} />
              <Route  path ="/login" component={Login} />
              <Route  path ="/logout" component={Logout} />
            </Switch>
          </ErrorBoundary>
        </main>
        <footer>
          <FooterContainer />
        </footer>
      </UserProvider>
    );
  }
}

export default connect(null, {getTodo, getFilter, getLists})(App);