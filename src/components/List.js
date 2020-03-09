import React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';
import { FaRemove, FaSave, FaTasks } from './Icons';


export default function List ({list, updateList, updateListOnBackend, removeList}) {

  function ListBtns({containerClass}) {
    const name = list.name;
    return (   
      <div className={containerClass}>
        <Link className="btn btn-outline-secondary" name="see tasks" aria-label="see tasks" title="see tasks" to={{
          pathname: `todos/list/${list.id}`,
          state: {name}
          }}>
            <FaTasks />
        </Link>
        <button onClick={() => updateListOnBackend(list.id, list.name)} className="btn btn-outline-primary" name="save" title="save" aria-label="save">
          <FaSave />
        </button>
        <button onClick={removeList} name="remove" title="remove" aria-label="remove" className="btn btn-outline-danger">
          <FaRemove />
        </button>
      </div>
      );
  }

  return (
    <li className="list-group-item show">
      <div className="input-group">
        <input value={list.name} type="text" aria-label="list" onChange={e => updateList(list.id, e.target.value)} className="form-control input-sm"/>
          <ListBtns containerClass="input-group-append lg-btn" />
      </div>
      <ListBtns containerClass="btn-group mt-1 float-right sm-btn" />
    </li>
  );
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  updateList: PropTypes.func.isRequired,
  updateListOnBackend: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired
};