import React from 'react';
import Todo from './todo';
import PropTypes from 'prop-types';
import {todoAdderContainer as TodoAdderContainer} from  '../containers/adderContainer';

export default class Todos extends React.Component {
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
        <ul className="list-group">
             {this.props.todos.map( (todo) => <Todo onComplete={() => {this.props.completeTodo(todo)}} 
            onRemove={ () => {this.props.removeTodo(todo.id)}} key={todo.id} todo={todo}/>)}
        </ul>
    </div>);
  }
}
  
Todos.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string
    })
  };