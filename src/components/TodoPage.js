import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaFilter } from './Icons'
import { TodosHeader} from './Header';
import { TodoAdderContainer } from  '../containers/AdderContainer';
import { BaseList, DecoratedList } from './BaseList';
import Todo from './Todo';
import { Footer } from '../components/Footer';

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
          <div className="container">
            <NavLink exact className={`btn btn-sm ${completedBtnClass} mx-2`}  to={{
              pathname: match.url,
              search: '?filter=completed',
              state:{name:listName}
            }}>
              <FaFilter /> completed
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
          </div>
  
    )
  };

  const filter=getFilterFromQueryString(location.search);
  useEffect(() => {getTodo(match.params.list, filter)}, [match.params.list, filter]);

  const listId = match.params.list;
  if (!listId) {
    return (
      <div className="container">
        <div className="alert alert-primary text-center my-3">
          <strong>Select a list to see its todos</strong>
        </div>
      </div>
    );
  } 
  const listName = location.state ? location.state.name : null;
    return (
      <>
        <TodosHeader />
        <div className="container">
          <div className="alert alert-primary text-center my-3">
            <h5>{listName}</h5>
          </div>
          <TodoAdderContainer list={listId} />
          <DecoratedList array={todos}>
            <BaseList>
              {todos.map( (todo) => <Todo 
                onComplete={() => updateTodoInBackend(todo,'1')} 
                onUncompleteTodo={() => updateTodoInBackend(todo,'0')}
                onUpdate={updateTodo} 
                onSave={() => updateTodoInBackend(todo) } 
                onRemove={ () => {removeTodo(todo.id)}} key={todo.id} todo={todo}/>
                )
              }
            </BaseList>
          </DecoratedList>
          <Footer>
            <TodoFooter/>
          </Footer>
        </div>
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
  
