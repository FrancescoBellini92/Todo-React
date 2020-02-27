import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default function Todos ({todos, completeTodo, removeTodo}) {
  return (
    <ul className="list-group mb-5 pb-5">
          {todos.map( (todo) => <Todo onComplete={() => {completeTodo(todo)}} 
        onRemove={ () => {removeTodo(todo.id)}} key={todo.id} todo={todo}/>)}
    </ul>
  );
}
  
Todos.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };