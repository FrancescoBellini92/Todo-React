import React from 'react';
import PropTypes from 'prop-types';
import {FaCheck, FaRemove} from './Icons';

export default function todo({onRemove, onComplete, todo}) {
    let returnedClassCheck ;
    todo.completed ? returnedClassCheck = "btn btn-success" : returnedClassCheck = "btn btn-secondary";
    return (
      <li className="list-group-item bg-light">
        <div className="input-group todos mb-3">
          <input className="form-control" type="text" defaultValue={todo.todo} />
          <div className="input-group-append">
            <button className={returnedClassCheck} onClick={onComplete}>
              <FaCheck />
              </button>
            <button className="btn btn-danger" onClick={onRemove}>
            <FaRemove />
            </button>
          </div>
        </div>
      </li>
    );
  }

  todo.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    todo: PropTypes.shape( {
      completed: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired
    })
  };