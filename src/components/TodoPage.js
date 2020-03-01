import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';
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

    const listId = props.match.params.list || 0;
    const listName = props.location.state ? props.location.state.name : null;
    let ListAlert;
    if (listName) {
      ListAlert = () => 
        <div className="alert alert-primary text-center my-3">
          <strong>{listName}</strong>
        </div>
    } else {
      ListAlert = () => null;
    }
    return (
      <div className="container">
        <ListAlert />
        <TodoAdderContainer list={listId} />
        <Todos {...props} />
        <TodoFooter match={props.match} filter={filter}/>
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