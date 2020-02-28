import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';
import {TodoAdderContainer} from  '../containers/AdderContainer';
import {FooterContainer} from '../containers/FooterContainer';

export default function TodoPage (props) {
    if (props.hasError) {
      throw new Error(props.error.errorMessage)
    }

    useEffect(() => {props.getTodo(props.match.params.list)}, []);

    const listId = props.match.params.list || 0;
    const listName = props.location.state ? props.location.state.name : null;
    let ListAlert;
    if (listName) {
      ListAlert = () => 
        <div className="alert alert-primary text-center my-3">
          <strong>{listName}</strong>
        </div>
    } else {
      ListAlert = () => null;
    }
    return (
      <div className="container">
        <ListAlert />
        <TodoAdderContainer list={listId} />
        <Todos todos={props.todos} completeTodo={props.completeTodo} removeTodo={props.removeTodo} />
        <FooterContainer />
    </div>
    );
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