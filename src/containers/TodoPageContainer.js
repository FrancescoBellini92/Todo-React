import TodoPage from '../components/TodoPage';
import {connect} from 'react-redux';
import {removeTodo, completeTodo, getTodo} from '../actions/index';

function mapStateToProps({todos, filter, error}) {
    return ({ todos: [...todos.filter( (todo) => {
        if (filter.activeFilter) {
            return todo.state === filter.activeFilter
        }
        return true;
    })],
    error
})}

export const TodoPageContainer = connect(mapStateToProps, {removeTodo, completeTodo, getTodo})(TodoPage);