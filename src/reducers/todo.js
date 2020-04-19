import { 
  ADD_TODO, 
  GET_TODO, 
  REMOVE_TODO, 
  COMPLETE_TODO, 
  UPDATE_TODO, 
  UPDATE_TODO_BACKEND 
} from '../actions/actionTypes';

export default function todoReducer (state = [], action) {
  switch (action.type) {
    case `${GET_TODO}_PENDING`:
      return ['pending'];
    case `${GET_TODO}_FULFILLED`: 
      return action.payload.data.result.data;
    case `${ADD_TODO}_FULFILLED`:
      return [action.payload.data.result, ...state];
    case `${UPDATE_TODO}`:
        return state.map(todo => {
          let returnedValue = todo;
          todo.id === action.payload.id ? returnedValue = {...returnedValue, ...action.payload.content} : (()=>{})();
          return returnedValue;
        })
    case `${COMPLETE_TODO}_FULFILLED`:
    case `${REMOVE_TODO}_FULFILLED`:
      return state.map(todo => {
        const result = action.payload.data.result;
        let returnedValue;
        todo.id === result.id ? returnedValue = result : returnedValue = todo;
        return returnedValue;
      })
    case `${UPDATE_TODO_BACKEND}_FULFILLED`:
      return state.map(todo => {
        const result = action.payload.data.result;
        let returnedValue;
        todo.id === result.id ? returnedValue = {...result, updated: true} : returnedValue = todo;
        return returnedValue;
      })
    default:
      return state;
  }  
}