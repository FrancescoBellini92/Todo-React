import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaSave, FaRemove } from './Icons';

export default function Todo({onRemove, onUpdate, onSave, onComplete, onUncompleteTodo, todo}) {
    let returnedClassCheck ;
    todo.completed ? returnedClassCheck = "btn-success" : returnedClassCheck = "btn-secondary";
    return (
      <li className="list-group-item bg-light">
        <div className="input-group todos mb-1">
          <input className="form-control" type="text" value={todo.todo} onChange={e => onUpdate(todo.id, e.target.value)} />
          <div className="input-group-append lg-btn">
            <button className={`btn ${returnedClassCheck}`} onClick={todo.completed ? onUncompleteTodo : onComplete}>
              <FaCheck />
              </button>
            <button className="btn btn-primary" onClick={onSave}>
                <FaSave />
            </button>
            <button className="btn btn-danger" onClick={onRemove}>
              <FaRemove />
            </button> 
          </div>
        </div>
        <div className="btn-group float-right sm-btn">
          <button className={`btn btn-sm ${returnedClassCheck}`} onClick={todo.completed ? onUncompleteTodo : onComplete}>
              <FaCheck />
            </button>
            <button className="btn btn-sm btn-primary" onClick={onSave}>
                <FaSave />
            </button>
            <button className="btn btn-sm btn-danger" onClick={onRemove}>
              <FaRemove />
            </button> 
          </div>
      </li>
    );
  }

  Todo.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    todo: PropTypes.shape( {
      completed: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired
    })
  };