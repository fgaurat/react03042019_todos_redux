


export function getAlltodos(){
    return async (dispatch) =>{
      const response = await fetch('http://localhost:3004/todos');
      const todos = await response.json();
      const action = {
        type:'LOAD_TODOS',
        todos
      }
      dispatch(action);
    }
  }
