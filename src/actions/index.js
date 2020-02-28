import Axios from "axios";
import {APIURL, APIFILTERURL, APILISTSURL} from '../config/config';

export const getTodo = (list = 1) => {
  return ({
    type:'GET_TODO',
    payload: Axios.get(APIURL + `?list_id=${list}`)
  });
}
export const addTodo = (todo, list_id = 1) => {
  return ({
    type: 'ADD_TODO',
    payload: Axios.post(APIURL,{
      todo,
      list_id,
      completed: 0
    })
  })}
 export const removeTodo = (id) => {
  return({
      type: 'REMOVE_TODO',
      payload: Axios.delete(APIURL+'/'+id, {id})
    });
  }
export const completeTodo = (todo) => {
  return ({
    type: 'COMPLETE_TODO',
    payload: Axios.patch(APIURL+'/'+ todo.id, {...todo, completed: 1})
  });
}
export const filterTodo = (filter = 'null') => {
  return ({
    type: 'SET_FILTER',
    payload: Axios.patch(APIFILTERURL, {activeFilter: filter})
  });
}



export const getLists = (name = null) => {
  let url = name ? APILISTSURL + `?name=${name}` : APILISTSURL
  return ({
    type:'GET_LISTS',
    payload: Axios.get(url)
  })
}
export const addList = (list) => {
  return ({
    type: 'ADD_LIST',
    payload: Axios.post(APILISTSURL,{
      name: list
    })
  })
}
export const updateList = (id, name) => {
  return ({
    type: 'UPDATE_LIST',
    payload: { id, name}
  });
}
export const updateListOnBackend = (list, name) => {
  return ({
    type: 'UPDATE_LIST_ON_BACKEND',
    payload: Axios.post(APILISTSURL + `/${list}`,{
      name,
      _method: 'PUT'
    })
  })
}
export const removeList= (id) => {
  return({
      type: 'REMOVE_LIST',
      payload: Axios.delete(APILISTSURL + '/' + id, {id})
    });
  }
export const getFilter= () => {
  return ({
    type:'GET_FILTER',
    payload: Axios.get(APIFILTERURL)
  });
}