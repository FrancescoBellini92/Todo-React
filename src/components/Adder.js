import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from './Icons'

export default function adder({addFunc, list}) {
  let input;
  return (
    <div className="input-group my-2 adder-container">
      <input className="form-control" placeholder="Add..." ref={ node => {input = node}}
      onKeyUp={e => { if(e.keyCode === 13) {addFunc(input.value)}}} />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={
          () => {
            addFunc(input.value, list)
            input.value = '';
          }}>
            <FaPlus />
          </button>
      </div>
  </div>
  )
}

adder.propTypes = {
  addFunc: PropTypes.func,
  list: PropTypes.string
}