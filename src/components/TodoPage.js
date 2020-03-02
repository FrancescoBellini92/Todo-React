import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';
import { TodosHeader} from './Header';
import { TodoAdderContainer } from  '../containers/AdderContainer';
import { TodoFooter } from '../components/Footer';

export default function TodoPage (props) {
    if (props.error.hasError) {
      throw new Error(props.error.errorMessage)
    }

    const getFilterFromQueryString = (search) => {
      if (search.indexOf('filter') === -1) {
        return false;
      }
      return (search.split('=')[1]); 
    }

    const filter=getFilterFromQueryString(props.location.search);
    useEffect(() => {props.getTodo(props.match.params.list, filter)}, [filter]);


    const listId = props.match.params.list;
    if (listId) {
      const listName = props.location.state ? props.location.state.name : null;
      return (
        <>
          <TodosHeader />
            <div className="container">
              <div className="alert alert-primary text-center my-3">
                <strong>{listName}</strong>
              </div>
              <TodoAdderContainer list={listId} />
              <Todos {...props} />
              <TodoFooter match={props.match} listName={listName} filter={filter}/>
          </div>
        </>
          );
    } 
    return (
        <div className="container">
          <div className="alert alert-primary text-center my-3">
            <strong>Select a list to see its todos</strong>
        </div>
    </div>
    );
}
  
Todos.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string
    })
  };