import { GET_LISTS, ADD_LIST, UPDATE_LIST, REMOVELIST } from '../actions/actionTypes';

export default function listReducer (state = [], action) {
  switch (action.type) {
    case `${GET_LISTS}_PENDING`: 
      return  ['pending']
    case `${GET_LISTS}_FULFILLED`: 
      return  action.payload.data.result.data;
    case `${ADD_LIST}_FULFILLED`:
      return [action.payload.data.result, ...state];
    case `${UPDATE_LIST}`:
      return state.map(list => {
        let returnedValue;
        list.id === action.payload.id ? returnedValue = action.payload : returnedValue = list;
        return returnedValue;
      })
    case `${REMOVELIST}_FULFILLED`:
      return state.filter(list => list.id !== action.payload.config.id);
    default:
      return state;
  }  
}
