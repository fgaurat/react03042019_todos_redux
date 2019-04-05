import * as React from 'react';


export function TodoListForm(props:any){
console.log('TodoListForm',props)
return <form onSubmit={props.handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputTitle">Title</label>
    <input type="text" name="title" value={props.values.title} onChange={props.handleChange} className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Enter title"/>
  </div>

  <div className="form-group form-check">
    <input type="checkbox" name="completed" checked={props.values.completed} onChange={props.handleChange} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


}