import {GET_FILTER, SET_FILTER} from '../actions/actionTypes';


export default function storeReducer (state = {}, action) {
    switch (action.type) {
      case `${GET_FILTER}_FULFILLED`: 
        state = action.payload.data;
        return state;
      case `${SET_FILTER}_FULFILLED`:
        state = action.payload.data;
        return state;
      default:
        return state;
    }  
  }