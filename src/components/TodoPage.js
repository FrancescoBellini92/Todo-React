import React from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';
import {TodoAdderContainer} from  '../containers/AdderContainer';
import {FooterContainer} from '../containers/FooterContainer';

export default class TodoPage extends React.Component {
  constructor (props) {
    super(props);
    if (props.hasError) {
      throw new Error(props.error.errorMessage)
    }
  }

  componentDidMount() {
    this.props.getTodo(this.props.match.params.list)
  }

  componentDidUpdate(prevProps) {
    if(this.props.list !== prevProps.list) {
      this.props.getTodo(this.props.list);
    }
  }

  render () {
    const listId = this.props.match.params.list || 0;
    const listName = this.props.location.state ? this.props.location.state.name : null;
    return (
      <div className="container">
        <h3 className="text-center"> {listName}</h3>
        <TodoAdderContainer list={listId} />
        <Todos todos={this.props.todos} completeTodo={this.props.completeTodo} removeTodo={this.props.removeTodo} />
        <FooterContainer />
    </div>
    );
  }
}
  
Todos.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string
    })
  };