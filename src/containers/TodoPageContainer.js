import {connect} from 'react-redux';
import TodoPage from '../components/TodoPage';
import {removeTodo, updateTodoInBackend, updateTodo, getTodo} from '../actions/index';

function mapStateToProps({todos, error}) {
  return ({todos, error})}

export const TodoPageContainer = connect(mapStateToProps, {removeTodo, updateTodoInBackend, updateTodo, getTodo})(TodoPage);