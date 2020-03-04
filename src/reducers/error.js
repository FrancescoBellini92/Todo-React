import { ADD_TODO, GET_TODO, REMOVE_TODO, COMPLETE_TODO } from '../actions/actionTypes';

export default function errorReducer (state = {}, action) {
  switch (action.type) {
    case `${ADD_TODO}_REJECTED`:
    case `${GET_TODO}_REJECTED`:
    case `${COMPLETE_TODO}_REJECTED`:
    case `${REMOVE_TODO}_REJECTED`:
      return {
        hasError: true,
        errorMessage: action.payload.message
        };
    default:
      return state;
  }  
}