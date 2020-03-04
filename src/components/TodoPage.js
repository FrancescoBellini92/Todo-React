import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import { TodosHeader} from './Header';
import { TodoAdderContainer } from  '../containers/AdderContainer';
import Todo from './Todo';
import { TodoFooter } from '../components/Footer';

export default function TodoPage ({ todos, error, match, location, removeTodo, updateTodoInBackend, updateTodo, getTodo}) {

    if (error.hasError) {
      throw new Error(error.errorMessage)
    }

    function getFilterFromQueryString (search) {
      if (search.indexOf('filter') === -1) {
        return false;
      }
      return (search.split('=')[1]); 
    }

    function Todos () {
      return (
        <ul className="list-group mb-5 pb-5">
              {todos.map( (todo) => <Todo onComplete={() => updateTodoInBackend(todo,'1')} 
                onUncompleteTodo={() => updateTodoInBackend(todo,'0')}
                onUpdate={updateTodo} 
                onSave={() => updateTodoInBackend(todo) } 
                onRemove={ () => {removeTodo(todo.id)}} key={todo.id} todo={todo}/>)}
        </ul>
      );
    }

    const filter=getFilterFromQueryString(location.search);
    useEffect(() => {getTodo(match.params.list, filter)}, [filter]);

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
            <Todos />
            <TodoFooter match={match} listName={listName} filter={filter}/>
          </div>
        </>
      );
}
  
