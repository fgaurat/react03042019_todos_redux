import { connect } from "react-redux";
import {TodoListForm} from "./TodoListForm";
import { Todo } from "./Todo";


const mapStateToProps= (state:any)=>{
    console.log('mapStateToProps',state.theTodoForm)
    return {values:state.theTodoForm}
}
const mapDispatchToProps= (dispatch:any) =>{
 return {
 
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoListForm)
