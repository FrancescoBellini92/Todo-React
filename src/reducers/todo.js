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
    case `${GET_TODO}_FULFILLED`: 
      return action.payload.data.result.data;;
    case `${ADD_TODO}_FULFILLED`:
      return [action.payload.data.result, ...state];
    case `${UPDATE_TODO}`:
        return state.map(todo => {
          let returnedValue = todo;
          todo.id === action.payload.id ? returnedValue.todo = action.payload.todo : (()=>{})();
          return returnedValue;
        })
    case `${COMPLETE_TODO}_FULFILLED`:
    case `${UPDATE_TODO_BACKEND}_FULFILLED`:
      const result = action.payload.data.result;
      return state.map(todo => {
        let returnedValue;
        todo.id === result.id ? returnedValue = result : returnedValue = todo;
        return returnedValue;
      })
    case `${REMOVE_TODO}_FULFILLED`:
      const success = action.payload.data.success; 
      return state.filter(item => success && item.id !== action.payload.config.id);
    default:
      return state;
  }  
}