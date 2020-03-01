import { combineReducers } from 'redux';
import todos from './todo.js';
import error from './error.js';
import lists from './lists.js';

export default combineReducers({
  todos,
  error,
  lists
});