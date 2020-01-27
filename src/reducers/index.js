export default function storeReducer (store, action) {
    switch (action.type) {
      case 'GET_TODO_FULFILLED': 
        store.todos = [...action.payload.data];
        return {...store};

      case 'GET_FILTER_FULFILLED': 
        store.filter = action.payload.data;
        return {...store};

      case 'ADD_TODO_FULFILLED':
        store.todos = [
          action.payload.data,
          ...store.todos
        ];
        store.activeFilter = null;
        return {...store};

      case 'REMOVE_TODO_FULFILLED':
        store.todos[action.payload.data.id] = action.payload.data;
        return {...store};

      case 'COMPLETE_TODO_FULFILLED':
        store.todos[action.payload.data.id] = action.payload.data;
        return {...store};

      case 'SET_FILTER_FULFILLED':
        store.filter = action.payload.data;
        return {...store};
        
      default:
        return {...store};
    }  
  }