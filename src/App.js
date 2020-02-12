import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import {allTodoContainer as AllTodoContainer} from './containers/allTodoContainer';
import {listsContainer as ListsContainer} from './containers/listsContainer';
import {footerContainer as FooterContainer} from './containers/FooterContainer';
import ErrorBoundary from './components/ErrorBoudary';
import {getTodo, getFilter, getLists} from './actions/index';

class App extends React.Component {
  componentDidMount() {
    //this.props.getFilter();
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
            <Route  path ="/lists/:list/todos" exact component={AllTodoContainer}  />
            <Route  path ="/lists" exact component={ListsContainer}  />
            <Route  path ="/todos" exact component={AllTodoContainer}  />
          </ErrorBoundary>
          <FooterContainer />
        </main>
      </div>
    );
  }
}

export default connect(null, {getTodo, getFilter, getLists})(App);