import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default function Todos ({todos, updateTodoInBackend, updateTodo, removeTodo}) {
  return (
    <ul className="list-group mb-5 pb-5">
          {todos.map( (todo) => <Todo onComplete={() => updateTodoInBackend(todo,'1')} 
            onUncompleteTodo={() => updateTodoInBackend(todo,'0')}
            onUpdate={updateTodo} 
            onSave={() => updateTodoInBackend(todo) } 
            onRemove={ () => {removeTodo(todo.id)}} key={todo.id} todo={todo}/>)}
    </ul>
  );
}
  
Todos.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };