import { connect } from "react-redux";
import TodoList from "./TodoList";
import { Todo } from "./Todo";
import { getAlltodos, deleteTodo } from "./actions/todo.actions";


const mapStateToProps= (state:any)=>{
    return {todos:state.theTodos.todos}
}
const mapDispatchToProps= (dispatch:any) =>{
    return {
        loadTodos:dispatch(getAlltodos()),
        onDelete: (todo:Todo) => dispatch(deleteTodo(todo))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)