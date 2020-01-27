import Axios from "axios";
import {APIURL, APIFILTERURL} from '../config/config';

export const getTodo = () => {
  return ({
    type:'GET_TODO',
    payload: Axios.get(APIURL)
  });
}
export const getFilter= () => {
  return ({
    type:'GET_FILTER',
    payload: Axios.get(APIFILTERURL)
  });
}


export const addTodo = (todo) => {
    return ({
      type: 'ADD_TODO',
      payload: Axios.post(APIURL,{
        title: todo,
        state: 'pending'
      })
    })
  }

 export const removeTodo = (id) => {
   return({
      type: 'REMOVE_TODO',
      payload: Axios.patch(APIURL+'/'+id, {state: 'deleted'})
    });
  }

  export const completeTodo = (id) => {
    return ({
      type: 'COMPLETE_TODO',
      payload: Axios.patch(APIURL+'/'+id, {state: 'completed'})
    });
  }
  
  export const filterTodo = (filter = 'null') => {
    return ({
      type: 'SET_FILTER',
      payload: Axios.patch(APIFILTERURL, {activeFilter: filter})
    });
  }