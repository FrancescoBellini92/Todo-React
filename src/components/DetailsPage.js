import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import {FaSave, FaRemove } from './Icons';
import {TodosHeader} from './Header';
import TodoDetails from './Details';
import {Footer, ContextSpecificButton} from './Footer';
import DetailsAlert from './Alert';
import Main from './Main';

export default function DetailsPage({todos, match, removeTodo, updateTodoInBackend, updateTodo}) {

  const todo = todos.filter(todo => todo.id === +match.params.todo)[0] || {};

  const DetailsFooter =  () => {

    return (
      <Container>
        <ContextSpecificButton context={todo.deleted_at} variant="outline-primary" className="mx-2" onClick={() => updateTodoInBackend(todo)}>
          <FaSave /> Save
        </ContextSpecificButton>
        <ContextSpecificButton context={todo.deleted_at} variant="outline-danger" className="mx-2" onClick={() => removeTodo(todo.id)}>
          <FaRemove /> Remove
        </ContextSpecificButton>
    </Container>
    );
  }
 
  return (
    <>
      <TodosHeader />
      <Main className="container">
        <DetailsAlert deleted={todo.deleted_at} updated={todo.updated}/>
        <TodoDetails todo={todo} match={match} onUpdate={updateTodo} />
      </Main>
      <Footer>
        <DetailsFooter />
      </Footer>
    </>
  );
}

