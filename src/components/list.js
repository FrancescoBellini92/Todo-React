import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaRemove, FaSave, FaTasks } from './Icons';


export default function List ({name, id, onUpdate, onRemove}) {
  const input = React.createRef();
  const val = name;
  return (
    <li className="list-group-item bg-light">
      <div className="input-group">
        <input ref={input} value={val} type="text" onChange={e => onUpdate(id, e.target.value)} className="form-control list-item" to={{
          pathname: `lists/${id}/todos`,
          state: {
            name
          }}}/>
     
          <div className="input-group-append lg-btn">
          <Link className="btn btn-primary" to={{
          pathname: `lists/${id}/todos`,
          state: {
            name
          }}}>
                <FaTasks />
            </Link>
            <button onClick={onRemove} className="btn btn-success">
                <FaSave />
            </button>
            <button onClick={onRemove} className="btn btn-danger">
              <FaRemove />
            </button>
          </div>
      </div>
      <div className="btn-group mt-1 float-right sm-btn">
      <Link className="btn btn-primary" to={{
          pathname: `lists/${id}/todos`,
          state: {
            name
          }}}>
                <FaTasks />
            </Link>
            <button onClick={onRemove} className="btn btn-success">
                <FaSave />
            </button>
            <button onClick={onRemove} className="btn btn-danger">
              <FaRemove />
            </button>
          </div>
    </li>
  );
}