import {GET_LISTS, ADD_LIST, REMOVELIST} from '../actions/actionTypes';


export default function listReducer (state = [], action) {
    switch (action.type) {
      case `${GET_LISTS}_FULFILLED`: 
        state = action.payload.data.result.data;
        return state;
      case `${ADD_LIST}_FULFILLED`:
        state = [
          action.payload.data.result,
          ...state
        ];
        return state;
      case `${REMOVELIST}_FULFILLED`:
        return state.filter(list => list.id !== action.payload.config.id);
      default:
        return state;
    }  
  }