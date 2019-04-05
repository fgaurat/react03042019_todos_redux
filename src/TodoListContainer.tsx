import { connect } from "react-redux";
import TodoList from "./TodoList";
import { Todo } from "./Todo";
import { getAlltodos } from "./actions/todo.actions";


const mapStateToProps= (state:any)=>{
    return {todos:state.theTodos.todos}
}
const mapDispatchToProps= (dispatch:any) =>{
    return {
        loadTodos:dispatch(getAlltodos()),
        onDelete: (todo:Todo)=> console.log("delete "+todo)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)