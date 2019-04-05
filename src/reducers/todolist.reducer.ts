


const reducer = (state:any={todos:[]},action:any) =>{
    console.log("todolist",action);
    switch(action.type){
        case 'LOAD_TODOS':
            return {todos:action.todos};
        default:
            return state;
    }

}
export default reducer;