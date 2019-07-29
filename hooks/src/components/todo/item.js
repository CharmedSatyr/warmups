import React, { useContext } from 'react'
import If from 'react-ifs'

import { ToDoContext } from './todo-provider'
import { LoginContext } from '../auth/login-provider'
import Form from './form'

const UneditableItem = props => (
  <span onClick={() => alert(`You can't delete!`)}>{props.item.text}</span>
)

const Item = props => {
  const { capabilities } = useContext(LoginContext)
  const { editing, toggleComplete, toggleEdit } = useContext(ToDoContext)
  const { item } = props

  return (
    <li className={`complete-${item.complete.toString()}`}>
      {/* DELETE */}
      <If condition={capabilities.includes('delete')} else={<UneditableItem item={item} />}>
        <span onClick={() => toggleComplete(item.id)}>{item.text}</span>
      </If>

      {/* UPDATE */}
      <If condition={capabilities.includes('update')}>
        <button onClick={() => toggleEdit(item.id)}>edit</button>
      </If>

      <If condition={editing === item.id}>
        <Form />
      </If>
    </li>
  )
}

export default Item
