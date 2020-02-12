import allToDo from '../components/allTodo';
import {connect} from 'react-redux';
import {removeTodo, completeTodo} from '../actions/index';

function mapStateToProps({todos, filter, error}) {
    return ({ items: [...todos.filter( (item,index) => {
        if (filter.activeFilter) {
            return item.state === filter.activeFilter
        }
        return true;
    })],
    error
})}
export const allTodoContainer = connect(mapStateToProps, {removeTodo, completeTodo})(allToDo);