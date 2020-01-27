import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import {adderContainer as AdderContainer} from './containers/adderContainer';
import {listContainer as ListContainer} from './containers/listContainer';
import {footerContainer as FooterContainer} from './containers/FooterContainer';
import {getTodo, getFilter} from './actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.getFilter();
    this.props.getTodo();
  }

  render () {
    return (
      <div className="App">
        <header>
        <Navbar/>
        </header>
        <main className="container">
          <Title />
          <AdderContainer refVar={this.todoInput} addTodo={this.addTodo} />
        <ListContainer />
        <FooterContainer />
        </main>
      </div>
    );
  }
}

export default connect(null, {getTodo, getFilter})(App);