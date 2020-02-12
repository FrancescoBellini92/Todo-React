import {ADD_TODO, GET_TODO, REMOVE_TODO, COMPLETE_TODO} from '../actions/actionTypes';


export default function todoReducer (state = [], action) {
    switch (action.type) {
      case `${GET_TODO}_FULFILLED`: 
        state = action.payload.data.result.data;
        return state;
      case `${ADD_TODO}_FULFILLED`:
        state = [
          action.payload.data.result,
          ...state
        ];
        return state;
      case `${COMPLETE_TODO}_FULFILLED`:
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