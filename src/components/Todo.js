import React from 'react';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaCheck, FaSave, FaRemove } from './Icons';

export default function Todo({onRemove, onUpdate, onSave, onComplete, onUncompleteTodo, todo}) {
  let returnedClassCheck ;
  todo.completed ? returnedClassCheck = "outline-success" : returnedClassCheck = "outline-secondary";

  function TodoBtns({containerClass}) {
    return (   
      <div className={containerClass}>
        <Button aria-label="set as completed" title="set as completed" name="complete" variant={`${returnedClassCheck}`} onClick={todo.completed ? onUncompleteTodo : onComplete}>
          <FaCheck />
        </Button>
        <Button aria-label="save" title="save" name="save" variant="outline-primary" onClick={onSave}>
          <FaSave />
        </Button>
        <Button aria-label="remove" title="remove" name="remove" variant="outline-danger" onClick={onRemove}>
          <FaRemove />
        </Button> 
      </div>
      );
  }

  return (
    <ListGroup.Item className="show">
      <InputGroup className="mb-1">
        <FormControl className="input-sm" type="text" aria-label="todo"  value={todo.todo} onChange={e => onUpdate(todo.id, e.target.value)} />
        <TodoBtns containerClass="input-group-append lg-btn"/>
      </InputGroup>
      <TodoBtns containerClass="btn-group float-right sm-btn" />
    </ListGroup.Item>
  );
}
 
Todo.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onUncompleteTodo :PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  todo: PropTypes.shape( {
    completed: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired
  })
};