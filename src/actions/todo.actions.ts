import { Todo } from "../Todo";



export function getAlltodos(){
    return async (dispatch:any) =>{
      const response = await fetch('http://localhost:3004/todos');
      const todos = await response.json();
      const action = {
        type:'LOAD_TODOS',
        todos
      }
      dispatch(action);
    }
  }

  export function deleteTodo(todo:Todo){
    return async (dispatch:any) =>{
        const url_delete = `http://localhost:3004/todos/${todo.id}`;
        await fetch(url_delete,{method:'DELETE'});
        dispatch(getAlltodos())
    }
}