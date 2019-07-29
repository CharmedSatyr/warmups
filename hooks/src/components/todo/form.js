import React, { useContext } from 'react'

import { ToDoContext } from './todo-provider'

const Form = () => {
  const { handleInputChange, item, updateItem } = useContext(ToDoContext)

  return (
    <form onSubmit={updateItem}>
      <input
        onChange={handleInputChange}
        id={item.id}
        complete={item.complete.toString()}
        defaultValue={item.text}
      />
    </form>
  )
}

export default Form
