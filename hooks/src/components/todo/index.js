import React, { useContext } from 'react'
import If from 'react-ifs'

import ToDoProvider from './todo-provider'

import AddToDo from './add-todo'
import Count from './count'
import List from './list'

import './todo.scss'

import { LoginContext } from '../auth/login-provider'

const ToDo = () => {
  const { loggedIn, capabilities } = useContext(LoginContext)

  return (
    <If condition={loggedIn && capabilities.length > 0}>
      <ToDoProvider>
        {/* READ */}
        <If condition={capabilities.includes('read')}>
          <section className="todo">
            <Count />

            {/* CREATE */}
            <If condition={capabilities.includes('create')}>
              <AddToDo />
            </If>

            {/* UPDATE, DELETE inside */}
            <List capabilities={capabilities} />
          </section>
        </If>
      </ToDoProvider>
    </If>
  )
}

export default ToDo
