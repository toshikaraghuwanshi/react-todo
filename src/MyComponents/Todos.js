import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos (props) {
  
  return (
    
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0 ? 'No item to display' :
        props.todos.map((j)=>{
            return <div key={j.sno}><TodoItem todo={j} onDelete={props.onDelete}/></div>
        })}
        

    </div>
    
  )
}
