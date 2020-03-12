import React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';
import { FaRemove, FaSave, FaTasks } from './Icons';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';


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
        <Button onClick={() => updateListOnBackend(list.id, list.name)} variant="btn btn-outline-primary" name="save" title="save" aria-label="save">
          <FaSave />
        </Button>
        <Button onClick={removeList} name="remove" title="remove" aria-label="remove" variant="btn btn-outline-danger">
          <FaRemove />
        </Button>
      </div>
      );
  }

  return (
    <ListGroup.Item className="list-group-item show">
      <InputGroup >
        <FormControl value={list.name} type="text" aria-label="list" onChange={e => updateList(list.id, e.target.value)} className="form-control input-sm"/>
          <ListBtns containerClass="input-group-append lg-btn" />
      </InputGroup>
      <ListBtns containerClass="btn-group mt-1 float-right sm-btn" />
    </ListGroup.Item >
  );
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  updateList: PropTypes.func.isRequired,
  updateListOnBackend: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired
};