import React from 'react';

export default function item({onRemove, onComplete, item}) {
    let returnedClassCheck ;
    item.state === 'completed' ? returnedClassCheck = "btn btn-success" : returnedClassCheck = "btn btn-outline-success";
    let returnedClassRemove ;
    item.state === 'deleted' ? returnedClassRemove = "btn btn-danger" : returnedClassRemove = "btn btn-outline-danger";
    return (
      <li className="list-group-item ">
        <div className="input-group mb-3">
          <input className="form-control" type="text" defaultValue={item.title} />
          <div className="input-group-append">
            <button className={returnedClassCheck} onClick={onComplete}>
              <span role="img">&#x2713;</span>
              </button>
            <button className={returnedClassRemove} onClick={onRemove}>
              <span role="img"></span>&#x274c;</button>
          </div>
        </div>
      </li>
    );
  }