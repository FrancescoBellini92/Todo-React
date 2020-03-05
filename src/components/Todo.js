import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaSave, FaRemove } from './Icons';

export default function Todo({onRemove, onUpdate, onSave, onComplete, onUncompleteTodo, todo}) {
  let returnedClassCheck ;
  todo.completed ? returnedClassCheck = "btn-outline-success" : returnedClassCheck = "btn-outline-secondary";

  function TodoBtns({containerClass}) {
    return (   
      <div className={containerClass}>
        <button className={`btn ${returnedClassCheck}`} onClick={todo.completed ? onUncompleteTodo : onComplete}>
          <FaCheck />
        </button>
        <button className="btn btn-outline-primary" onClick={onSave}>
          <FaSave />
        </button>
        <button className="btn btn-outline-danger" onClick={onRemove}>
          <FaRemove />
        </button> 
      </div>
      );
  }

  return (
    <li className="list-group-item show">
      <div className="input-group mb-1">
        <input className="form-control input-sm" type="text" value={todo.todo} onChange={e => onUpdate(todo.id, e.target.value)} />
        <TodoBtns containerClass="input-group-append lg-btn"/>
      </div>
      <TodoBtns containerClass="btn-group float-right sm-btn" />
    </li>
  );
}
 
Todo.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onUncompleteTodo :PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  todo: PropTypes.shape( {
    completed: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired
  })
};