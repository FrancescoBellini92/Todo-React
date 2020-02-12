import React from 'react';
import PropTypes from 'prop-types';

export default function item({onRemove, onComplete, item}) {
    let returnedClassCheck ;
    item.completed ? returnedClassCheck = "btn btn-success" : returnedClassCheck = "btn btn-outline-success";
    return (
      <li className="list-group-item ">
        <div className="input-group mb-3">
          <input className="form-control" type="text" defaultValue={item.todo} />
          <div className="input-group-append">
            <button className={returnedClassCheck} onClick={onComplete}>
              <span role="img">&#x2713;</span>
              </button>
            <button className="btn btn-outline-danger" onClick={onRemove}>
              <span role="img"> &#x274c; </span>
            </button>
          </div>
        </div>
      </li>
    );
  }

  item.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    item: PropTypes.shape( {
      state: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  };