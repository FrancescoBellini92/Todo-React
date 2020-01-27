import List from '../components/List';
import {connect} from 'react-redux';
import {removeTodo, completeTodo} from '../actions/index';

function mapStateToProps(state) {
    return ({ items: [...state.todos.filter( (item,index) => {
        if (state.filter.activeFilter) {
            return item.state === state.filter.activeFilter
        }
        return true;
    })]
})}
export const listContainer = connect(mapStateToProps, {removeTodo, completeTodo})(List);