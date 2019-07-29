import React, { useContext, useState } from 'react'
import superagent from 'superagent'
import If from 'react-ifs'

import { LoginContext } from './login-provider'

const Login = props => {
  const context = useContext(LoginContext)
  const [state, setState] = useState({})

  const handleChange = e => {
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value

    setState(prevState => Object.assign({}, prevState, { [key]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_API}/signin`

    console.log(
      `Entered: ${state}`,
      `Hardcoded:
         admin:
           username: 'admin',
           password: 'ADMIN',
           roles: 'create, read, update, delete',
         editor:
           username: 'editor',
           password: 'EDITOR',
           roles: 'create, read, update',
         user:
           username: 'user',
           password: 'USER',
           roles: 'read',
     `
    )

    superagent
      .post(url)
      .auth(state.username || 'admin', state.password || 'ADMIN')
      .then(result => {
        const token = result.text
        context.verify(token)
      })
      .catch(console.error)
  }

  const Logout = () => <button onClick={context.logout}>log out</button>

  return (
    <If condition={!context.loggedIn} else={<Logout />}>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="username" type="username" />
        <input name="password" onChange={handleChange} placeholder="password" type="password" />
        <input type="submit" value="login" />
      </form>
    </If>
  )
}

export default Login
