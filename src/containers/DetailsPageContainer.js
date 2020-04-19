import {connect} from 'react-redux';
import DetailsPage from '../components/DetailsPage';
import {getTodo, removeTodo, updateTodoInBackend, updateTodo} from '../actions/index';

function mapStateToProps({todos, error}) {
  return ({ todos,  error})}

export const DetailsPageContainer = connect(mapStateToProps, {getTodo, removeTodo, updateTodoInBackend, updateTodo})(DetailsPage);