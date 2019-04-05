import * as React from 'react';


export function TodoListItem(props:any){
    const todo = props.todo;
    
    return <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.dueDate}</td>
                <td>{todo.completed?'true':'false'}</td>
                <td>{todo.user_id}</td>
                <td>
                    <button className="btn btn-danger" onClick={_ => props.onDelete(todo)}>Delete</button>
                </td>
            </tr>
}