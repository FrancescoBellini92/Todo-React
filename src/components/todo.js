import React from 'react';
import PropTypes from 'prop-types';

export default function todo({onRemove, onComplete, todo}) {
    let returnedClassCheck ;
    todo.completed ? returnedClassCheck = "btn btn-success" : returnedClassCheck = "btn btn-outline-success";
    return (
      <li className="list-group">
        <div className="input-group mb-3">
          <input className="form-control" type="text" defaultValue={todo.todo} />
          <div className="input-group-append">
            <button className={returnedClassCheck} onClick={onComplete}>
              <span role="img" aria-label="confirm todo">&#x2713;</span>
              </button>
            <button className="btn btn-outline-danger" onClick={onRemove}>
            <span role="img" aria-label="delete todo">&#x274c;</span>
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