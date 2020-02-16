import React from 'react';
import PropTypes from 'prop-types';

export default function adder({addFunc, list}) {
  let input;
  return (
    <div className="input-group my-2">
      <input className="form-control" ref={ node => {input = node}}
      onKeyUp={e => { if(e.keyCode === 13) {addFunc(input.value)}}} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={
          () => {
            addFunc(input.value, list)
            input.value = '';
          }}>
            Add
          </button>
      </div>
  </div>
  )
}

adder.propTypes = {
  addTodo: PropTypes.func
}