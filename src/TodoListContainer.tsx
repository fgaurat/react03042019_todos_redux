import { connect } from "react-redux";
import TodoList from "./TodoList";
import { Todo } from "./Todo";


const mapStateToProps= (state:any)=>{
    return {todos:state.theTodos.todos}
}
const mapDispatchToProps= (dispatch:any) =>{
    return {
        onDelete: (todo:Todo)=> console.log("delete "+todo)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)