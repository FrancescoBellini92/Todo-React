import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import {todoAdderContainer as TodoAdderContainer} from  '../containers/adderContainer';

export default function allToDo({removeTodo, completeTodo, items, error, match, location}) {
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }
    const listId = match.params.list || 1;
    const listName = location.state ? location.state.name : null;
    return (
      <div className="container">
        <h3 className="text-center"> {listName}</h3>
        <TodoAdderContainer list={listId} />
        <ul className="list-group">
            {items.filter(item => item.list_id == listId).map( (item, index) => <Item onComplete={() => {completeTodo(item)}} 
            onRemove={ () => {removeTodo(item.id)}} key={item.id} item={item}/>)}
             {items.map( (item, index) => <Item onComplete={() => {completeTodo(item)}} 
            onRemove={ () => {removeTodo(item.id)}} key={item.id} item={item}/>)}
        </ul>
    </div>);
  }
  
  allToDo.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string
    })
  };