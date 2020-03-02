import React from 'react';
import {Link} from 'react-router-dom';
import { FaRemove, FaSave, FaTasks } from './Icons';


export default function List ({name, id, updateList, updateListOnBackend, removeList}) {
  return (
    <li className="list-group-item bg-light">
      <div className="input-group">
        <input value={name} type="text" onChange={e => updateList(id, e.target.value)} className="form-control list-item"/>
          <div className="input-group-append lg-btn">
            <Link className="btn btn-secondary" to={{
            pathname: `todos/list/${id}`,
            state: {
              name
            }}}>
                <FaTasks />
            </Link>
            <button onClick={() => updateListOnBackend(id, name)} className="btn btn-primary">
                <FaSave />
            </button>
            <button onClick={removeList} className="btn btn-danger">
              <FaRemove />
            </button>
          </div>
      </div>
      <div className="btn-group mt-1 float-right sm-btn">
        <Link className="btn btn-sm btn-secondary" to={{
            pathname: `todos/list/${id}`,
            state: {
              name
            }}}>
            <FaTasks />
        </Link>
        <button onClick={removeList} className="btn btn-sm btn-primary">
            <FaSave />
        </button>
        <button onClick={removeList} className="btn btn-sm btn-danger">
          <FaRemove />
        </button>
      </div>
    </li>
  );
}