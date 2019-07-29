import React, { useContext } from 'react'

import { ToDoContext } from './todo-provider'

const AddToDo = props => {
  const context = useContext(ToDoContext)

  return (
    <div>
      <form onSubmit={context.addItem}>
        <input placeholder="Add To Do List Item" onChange={context.handleInputChange} />
      </form>
    </div>
  )
}

export default AddToDo
