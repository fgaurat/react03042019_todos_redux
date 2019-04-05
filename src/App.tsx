import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import { Todo } from './Todo';
import { TodoListForm } from './TodoListForm';
import TodoListContainer from './TodoListContainer';
import TodoListFormContainer from './TodoListFormContainer';

interface AppState {
  arr_todos: Todo[];
  todoForm:Todo
}

class App extends Component<any,AppState> {



  render() {
    return (
      <div className="container">
        <TodoListContainer/>
        <TodoListFormContainer/>
      </div>
    );
  }
}

export default App;
