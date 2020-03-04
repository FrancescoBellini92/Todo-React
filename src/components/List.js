import React from 'react';
import {Link} from 'react-router-dom';
import { FaRemove, FaSave, FaTasks } from './Icons';


export default function List ({list, updateList, updateListOnBackend, removeList}) {

  function ListBtns({containerClass}) {
    const name = list.name;
    return (   
      <div className={containerClass}>
        <Link className="btn btn-outline-secondary" to={{
          pathname: `todos/list/${list.id}`,
          state: {name}
          }}>
            <FaTasks />
        </Link>
        <button onClick={() => updateListOnBackend(list.id, list.name)} className="btn btn-outline-primary">
            <FaSave />
        </button>
        <button onClick={removeList} className="btn btn-outline-danger">
          <FaRemove />
        </button>
      </div>
      );
  }

  return (
    <li className="list-group-item">
      <div className="input-group">
        <input value={list.name} type="text" onChange={e => updateList(list.id, e.target.value)} className="form-control input-sm"/>
          <ListBtns containerClass="input-group-append lg-btn" />
      </div>
      <ListBtns containerClass="btn-group mt-1 float-right sm-btn" />
    </li>
  );
}