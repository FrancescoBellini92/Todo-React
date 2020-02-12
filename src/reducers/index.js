import {combineReducers} from 'redux';
import todos from './todo.js';
import filter from './filter.js';
import error from './error.js';
import lists from './lists.js';

export default combineReducers({
  todos,
  filter,
  error,
  lists
});