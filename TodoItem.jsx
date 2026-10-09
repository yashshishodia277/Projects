import React from 'react'
// these todo and onDelete we used are destructuring we do..
const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
    <hr/>
    </>
  )
}

export default TodoItem;