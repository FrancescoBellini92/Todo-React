import React from 'react';

import {connect} from 'react-redux';

import {Route, Switch} from 'react-router-dom';

import {getTodo, getFilter, getLists} from './actions/index';

import Navbar from './components/navbar';
import ErrorBoundary from './components/ErrorBoundary';

import {todosContainer as TodosContainer} from './containers/todosContainer';
import {listsContainer as ListsContainer} from './containers/listsContainer';
import {footerContainer as FooterContainer} from './containers/footerContainer';
import Login from './components/login';

class App extends React.Component {
  componentDidMount() {
    this.props.getTodo();
    this.props.getLists();
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <Navbar/>
        </header>
        <main className="container mb-5 pb-5"> 
          <ErrorBoundary>
            <Switch>
              <Route  path ="/lists/:list/todos" component={TodosContainer}  />
              <Route  path ="/lists" component={ListsContainer} />
              <Route  path ="/todos" component={TodosContainer} />
              <Route  path ="/login" component={Login} />
            </Switch>
          </ErrorBoundary>
        </main>
        <footer>
          <FooterContainer />
        </footer>
      </React.Fragment>
    );
  }
}

export default connect(null, {getTodo, getFilter, getLists})(App);