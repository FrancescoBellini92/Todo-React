import React  from 'react';
import {ButtonGroup, ToggleButton, InputGroup, Form, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {FaMapMarker, FaCalendar, FaClock, FaTasks} from './Icons';

const  ContextSpecificToggle = props => {
  if (props.context) {
    return (
      <ToggleButton {...props} disabled>
        {props.children}
      </ToggleButton>
    );
  }
  return (
    <ToggleButton {...props} >
      {props.children}
    </ToggleButton>
  );
}

export default function TodoDetails({todo, onUpdate}) {
    return (
      <Form className="fadeIn-show">
          <Form.Group >
          <InputGroup  className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text><FaTasks /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" value={todo.content} onChange={e => todo.deleted_at ? null :  onUpdate(todo.id, {content: e.target.value})}/>
          </InputGroup>
        </Form.Group>
        <Form.Group >
          <InputGroup  className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text><FaMapMarker /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" value={todo.location} onChange={e => todo.deleted_at ? null :  onUpdate(todo.id, {location: e.target.value})}/>
          </InputGroup>
        </Form.Group>
        <Form.Group className="lg-btn">
          <InputGroup   className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text><FaCalendar /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="date" value={todo.date} onChange={e => todo.deleted_at ? null :  onUpdate(todo.id, {date: e.target.value})}/>
            <InputGroup.Append>
              <InputGroup.Text><FaClock /></InputGroup.Text>
            </InputGroup.Append>
            <FormControl type="time" value={todo.time} onChange={e => todo.deleted_at ? null :  onUpdate(todo.id, {time: e.target.value})}/>
          </InputGroup>
        </Form.Group>
        <Form.Group className="sm-btn">
          <InputGroup  className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text><FaCalendar /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="date" value={todo.date} onChange={e => todo.deleted_at ? null : onUpdate(todo.id, {date: e.target.value})}/>
          </InputGroup>
        </Form.Group>
        <Form.Group  className="sm-btn">
          <InputGroup className="my-3">
            <InputGroup.Prepend>
              <InputGroup.Text><FaClock /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="time"  value={todo.time} onChange={e => todo.deleted_at ? null : onUpdate(todo.id, {time: e.target.value})}/>
          </InputGroup>
        </Form.Group>
        <Form.Group className="text-center">
          <ButtonGroup toggle>
            <ContextSpecificToggle context={todo.deleted_at} variant={todo.completed ? 'success' : 'outline-success'} type="radio" name="status" onClick={e => onUpdate(todo.id, {completed: 1})}>
              Done
            </ContextSpecificToggle>
            <ContextSpecificToggle context={todo.deleted_at} variant={todo.completed ? 'outline-secondary' : 'secondary'} type="radio" name="status" onClick={e => onUpdate(todo.id, {completed: 0})}>
              Pending
            </ContextSpecificToggle>
          </ButtonGroup>
        </Form.Group>
      </Form>
    );
}