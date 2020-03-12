import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from './Icons'
import {InputGroup, FormControl, Button} from 'react-bootstrap';


export default function Adder({addFunc, list}) {
  let input;
  return (
    <InputGroup className="my-2 adder-container show">
      <FormControl aria-label="add input"  placeholder="Add..." ref={ node => {input = node}}
      onKeyUp={e => { if(e.keyCode === 13) {addFunc(input.value)}}} />
      <InputGroup.Append>
        <Button variant="primary" name="add-btn" aria-label="add" type="button" onClick={
          () => {
            addFunc(input.value, list)
            input.value = '';
          }}>
            <FaPlus />
          </Button>
      </InputGroup.Append>
  </InputGroup>
  )
}

Adder.propTypes = {
  addFunc: PropTypes.func,
  list: PropTypes.string
}