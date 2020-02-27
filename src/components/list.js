import React from 'react';
import {Link} from 'react-router-dom';

export default function List ({name, id, onRemove}) {
  return (
    <li className="list-group-item bg-light">
      <div className="input-group">
        <Link className="form-control" to={{
          pathname: `lists/${id}/todos`,
          state: {
            name
          }}}>
          {name} 
        </Link>
          <div className="input-group-append">
            <button onClick={onRemove} className="btn btn-outline-danger">
              <span role="img" aria-label="delete list">&#x274c;</span>
            </button>
          </div>
      </div>
    </li>
  );
}