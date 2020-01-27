import Adder from '../components/Adder';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
/*
const mapDispatchToProps = (dispatch) => {
    return ({
        addTodo: (todo) => {dispatch(addTodo(todo))}
    });

}
export const adderContainer = connect(null, mapDispatchToProps)(Adder);
*/
export const adderContainer = connect(null, {addTodo})(Adder);