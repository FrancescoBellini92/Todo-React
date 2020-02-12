import Adder from '../components/Adder';
import {connect} from 'react-redux';
import {addTodo, addList} from '../actions/index';


export const todoAdderContainer = connect(null, {addFunc: addTodo})(Adder);
export const listAdderContainer = connect(null, {addFunc: addList})(Adder);