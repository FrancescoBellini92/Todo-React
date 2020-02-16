import React from 'react';

import {connect} from 'react-redux';

import {Route} from 'react-router-dom';

import Navbar from './components/navbar';
import ErrorBoundary from './components/ErrorBoundary';

import {todosContainer as TodosContainer} from './containers/todosContainer';
import {listsContainer as ListsContainer} from './containers/listsContainer';
import {footerContainer as FooterContainer} from './containers/FooterContainer';

import {getTodo, getFilter, getLists} from './actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.getTodo();
    this.props.getLists();
  }

  render () {
    return (
      <div className="App">
        <header>
        <Navbar/>
        </header>
        <main className="container mb-5 pb-5"> 
          <ErrorBoundary>
            <Route  path ="/lists/:list/todos" exact component={TodosContainer}  />
            <Route  path ="/lists" exact component={ListsContainer}  />
            <Route  path ="/todos" exact component={TodosContainer}  />
          </ErrorBoundary>
          <FooterContainer />
        </main>
      </div>
    );
  }
}

export default connect(null, {getTodo, getFilter, getLists})(App);