import {ADD_TODO, GET_TODO, REMOVE_TODO, COMPLETE_TODO, GET_FILTER, SET_FILTER} from '../actions/actionTypes';


export default function errorReducer (state = {}, action) {
    switch (action.type) {
      case `${SET_FILTER}_REJECTED`:
      case `${ADD_TODO}_REJECTED`:
      case `${GET_FILTER}_REJECTED`:
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