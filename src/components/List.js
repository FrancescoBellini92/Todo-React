import React from 'react';
import {Link} from 'react-router-dom';

export default function list ({name, id, onRemove}) {
    return (
        <li className="list-group-item ">
          <Link to={{
            pathname: `lists/${id}/todos`,
            state: {
              name
            }
          }}>
            <div className="input-group mb-3">
              <input className="form-control" type="text" defaultValue={name} />
              <div className="input-group-append">
              <button onClick={onRemove} className="btn btn-outline-danger">
                <span role="img">&#x274c;</span>
              </button>
              </div>
            </div>
          </Link>
        </li>
      );
    }