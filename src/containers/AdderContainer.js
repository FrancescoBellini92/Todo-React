import Adder from '../components/Adder';
import {connect} from 'react-redux';
import {addTodo, addList} from '../actions/index';

export const TodoAdderContainer = connect(null, {addFunc: addTodo})(Adder);
export const ListAdderContainer = connect(null, {addFunc: addList})(Adder);