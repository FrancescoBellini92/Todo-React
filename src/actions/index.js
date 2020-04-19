import Axios from "axios";
import Auth from '../auth/auth';
import {APIURL, APILISTSURL} from '../config/config';


export const getTodo = (list = 1, filter = null) => {
  return ({
    type:'GET_TODO',
    payload: Axios.get(APIURL + `?list_id=${list}${filter ? '&filter=' + filter : ''}`)
  });
}

export const addTodo = (content, list_id = 1) => {
  return ({
    type: 'ADD_TODO',
    payload: Axios.post(APIURL, {
      content,
      list_id,
      completed: 0
    })}
  )
}

export const removeTodo = (id) => {
  return (
    {
      type: 'REMOVE_TODO',
      payload: Axios.delete(APIURL+`/${id}`, {id})
    }
  );
}

export const updateTodo = (id, content) => {
  return ({
    type: 'UPDATE_TODO',
    payload: {id, content}
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
    type: 'UPDATE_TODO_BACKEND',
    payload: Axios.patch(APIURL+'/'+ todo.id, requestBody)
  });
}

export const getLists = (name = null) => {
  let url = APILISTSURL + `?user_id=${Auth.getUser()}`;
  url = name ? url + `&name=${name}` : url;
  return ({
    type:'GET_LISTS',
    payload: Axios.get(url)
  })
}

export const addList = (list) => {
  return ({
    type: 'ADD_LIST',
    payload: Axios.post(APILISTSURL,{
      name: list,
      user_id : Auth.getUser()
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
    }
  );
}