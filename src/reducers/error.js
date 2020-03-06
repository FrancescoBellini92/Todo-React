import { 
  GET_LISTS, 
  ADD_LIST, 
  UPDATE_LIST,
  REMOVELIST,
  ADD_TODO, 
  GET_TODO,
  COMPLETE_TODO, 
  UPDATE_TODO, 
  UPDATE_TODO_BACKEND,
  REMOVE_TODO  
} from '../actions/actionTypes';

export default function errorReducer (state = {}, action) {
  switch (action.type) {
    case `${GET_LISTS}_REJECTED`:
    case `${ADD_LIST}_REJECTED`:
    case `${UPDATE_LIST}_REJECTED`:
    case `${REMOVELIST}_REJECTED`:
    case `${ADD_TODO}_REJECTED`:
    case `${GET_TODO}_REJECTED`:
    case `${COMPLETE_TODO}_REJECTED`:
    case `${UPDATE_TODO}_REJECTED`:
    case `${UPDATE_TODO_BACKEND}_REJECTED`:
    case `${REMOVE_TODO}_REJECTED`:
      return {
        hasError: true,
        errorMessage: action.payload.message
        };
    default:
      return state;
  }  
}