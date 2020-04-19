import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, InputGroup,  FormControl, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {FaCheck, FaRemove, FaEdit} from './Icons';

export default function Todo({onRemove, onUpdate, onSave, onComplete, onUncompleteTodo, todo}) {
  const [fadeOut, setFadeOut] = useState(false);
  if (todo.deleted_at) {
    return null;
  }

  let returnedClassCheck ;
  todo.completed ? returnedClassCheck = "success" : returnedClassCheck = "outline-success";

  
  function TodoBtns({containerClass}) {
    return (   
      <div className={containerClass}>
        <Button 
          aria-label="set as completed" 
          title="set as completed" 
          name="complete" 
          variant={`${returnedClassCheck}`} 
          onClick={todo.completed ? onUncompleteTodo : onComplete}>
            <FaCheck />
        </Button>
        <Link className="btn btn-outline-primary" aria-label="info" title="info" name="info" to={{
              pathname: `/details/${todo.id}` 
              }}>
          <FaEdit />
        </Link>
        <Button 
          aria-label="remove" 
          title="remove" 
          name="remove" 
          variant="outline-danger" 
          onClick={() => {setFadeOut(true); onRemove();}}>
            <FaRemove />
        </Button> 
      </div>
      );
  }

  return (
    <ListGroup.Item className="fadeIn-show">
      <InputGroup  className="mb-1">
        <FormControl className={`${fadeOut ? 'fadeOut' : ''}`} type="text" aria-label="todo"  value={todo.content} />
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
    content: PropTypes.string.isRequired
  })
};