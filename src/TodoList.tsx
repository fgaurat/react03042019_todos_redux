import * as React from 'react';
import { Todo } from './Todo';
import { TodoListItem } from './TodoListItem';

export interface TodoListProps {
    todos:Todo[],
    onDelete:any
}
 
 
class TodoList extends React.Component<TodoListProps> {

    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>dueDate</th>
                        <th>completed</th>
                        <th>user_id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map( (todo:Todo) => 
                       <TodoListItem key= {todo.id} todo = {todo} onDelete={this.props.onDelete}/>
                    )}
                </tbody>
            </table>

          );
    }
}
 
export default TodoList;