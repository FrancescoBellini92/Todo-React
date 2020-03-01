import Axios from "axios";
import {APIURL, APILISTSURL} from '../config/config';

export const getTodo = (list = 1, filter = null) => {
  return ({
    type:'GET_TODO',
    payload: Axios.get(APIURL + `?list_id=${list}${filter ? '&filter=' + filter : ''}`)
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
      payload: Axios.delete(APIURL+`/${id}`, {id})
    });
  }
export const updateTodo = (id, todo) => {
  return ({
    type: 'UPDATE_TODO',
    payload: {id, todo}
  });
}
export const updateTodoInBackend = (todo, completed = null) => {
  let requestBody = {...todo};

  if (completed === '0') {
    requestBody.completed = 0;
  } else if (completed === '1') {
    requestBody.completed = 1;
  }

  return ({
    type: 'COMPLETE_TODO',
    payload: Axios.patch(APIURL+'/'+ todo.id, requestBody)
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
export const updateListOnBackend = (id, name) => {
  return ({
    type: 'UPDATE_LIST_ON_BACKEND',
    payload: Axios.patch(APILISTSURL + `/${id}`,{name})
  })
}
export const removeList= (id) => {
  return({
      type: 'REMOVE_LIST',
      payload: Axios.delete(APILISTSURL + '/' + id, {id})
    });
  }