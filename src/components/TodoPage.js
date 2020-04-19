import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import {FaFilter} from './Icons'
import {TodosHeader} from './Header';
import Main from './Main';
import {TodoAdderContainer} from  '../containers/AdderContainer';
import {BaseList, DecoratedList} from './BaseList';
import Todo from './Todo';
import {Footer} from '../components/Footer';

export default function TodoPage ({todos, error, match, location, removeTodo, updateTodoInBackend, updateTodo, getTodo}) {

  if (error.hasError) {
    throw new Error(error.errorMessage)
  }

  function getFilterFromQueryString (search) {
    if (search.indexOf('filter') === -1) {
      return false;
    }
    return (search.split('=')[1]); 
  }

  function TodoFooter () {
    let completedBtnClass;
    let pendingBtnClass;
    let allBtnClass;
  
    completedBtnClass = pendingBtnClass = allBtnClass = 'btn-secondary';
  
    switch (filter) {
      case 'completed':
        completedBtnClass = 'btn-primary';
        break;
      case 'pending':
        pendingBtnClass = 'btn-primary';
        break;
      default:
        allBtnClass = 'btn-primary';
    }
  
    return (
      <Container>
        <NavLink exact className={`btn btn-sm ${completedBtnClass} mx-2`}  to={{
          pathname: match.url,
          search: '?filter=completed',
          state:{name:listName}
        }}>
          <FaFilter /> done
        </NavLink>
        <NavLink exact className={`btn btn-sm ${pendingBtnClass} mx-2`} to={{
          pathname: match.url,
          search: '?filter=pending',
          state: {name:listName}
          }}>
          <FaFilter /> pending
        </NavLink>
        <NavLink exact className={`btn btn-sm ${allBtnClass} mx-2`}  to={{
          pathname: match.url,
          state: {name:listName}
          }}>
          <FaFilter /> all
        </NavLink>
      </Container>
    )
  };

  const filter=getFilterFromQueryString(location.search);
  useEffect(() => {getTodo(match.params.list, filter)}, [match.params.list, filter]);

  const listId = match.params.list;
  if (!listId) {
    return (
      <Container>
        <Alert variant="primary" className="text-center my-3">
          <strong>Select a list to see its todos</strong>
        </Alert>
      </Container>
    );
  } 
  const listName = location.state ? location.state.name : null;
    return (
      <>
        <TodosHeader />
        <Main className="container">
        <Alert variant="primary" className="text-center my-3">
          {listName}
        </Alert>
          <TodoAdderContainer list={listId} />
          <DecoratedList array={todos}>
            <BaseList>
              {todos.map( (todo) => <Todo 
                onComplete={() => updateTodoInBackend(todo,'1')} 
                onUncompleteTodo={() => updateTodoInBackend(todo,'0')}
                onRemove={ () => {removeTodo(todo.id)}} 
                todo={todo}
                match={match} />
                )
              }
            </BaseList>
          </DecoratedList>
          <Footer>
            <TodoFooter/>
          </Footer>
        </Main>
      </>
    );
}

TodoPage.propTypes  = {
  todos: PropTypes.array.isRequired, 
  error: PropTypes.shape({
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
  }).isRequired, 
  removeTodo: PropTypes.func.isRequired, 
  updateTodoInBackend: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  getTodo: PropTypes.func.isRequired,
}
  
