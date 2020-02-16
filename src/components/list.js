import React from 'react';
import {Link} from 'react-router-dom';

export default function list ({name, id, onRemove}) {
    return (
        <li className="list-group-item ">
          
            <div className="input-group mb-3">
            <Link className="form-control" to={{
              pathname: `lists/${id}/todos`,
              state: {
                name
              }
            }}>
             {name} 
            </Link>
              <div className="input-group-append">
              <button onClick={onRemove} className="btn btn-outline-danger">
                <span role="img">&#x274c;</span>
              </button>
              </div>
            </div>
         
        </li>
      );
    }