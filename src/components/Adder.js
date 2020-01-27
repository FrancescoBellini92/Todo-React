import React from 'react';
export default function adder({addTodo}) {
  let toDoInput;
    return (
      <div className="input-group my-2">
        <input className="form-control" ref={ node => {toDoInput = node}}
        onKeyUp={e => { if(e.keyCode === 13) {addTodo(toDoInput.value)}}} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={
            () => {
              addTodo(toDoInput.value)
              toDoInput.value = '';
            }}>
              Add
            </button>
        </div>
    </div>
    )
  }