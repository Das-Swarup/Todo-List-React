import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  let TodosStyle={
    minHeight:"70vh",
    background:"#FFFABF",
  }
  return (
    <div className="container my-3" style={TodosStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0? <h5 className="text-center my-5"> No Todos to display</h5>: 
      props.todos.map((todo)=>{
        return (
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
      
    </div>
  )
}

