import React, { Component } from 'react'
import JWT from 'jsonwebtoken'

import cookie from 'react-cookies'

export const LoginContext = React.createContext()

class LoginProvider extends Component {
  constructor(props) {
    super(props)

    const qs = new URLSearchParams(window.location.search)
    const cookieToken = cookie.load('auth')
    const token = qs.get('token') || cookieToken || null

    this.state = {
      loggedIn: !!token,
      token,
      login: this.login,
      logout: this.logout,
      capabilities: [],
      verify: this.verify,
    }
  }

  login = token => {
    cookie.save('auth', token)
    this.setLoginState(true)
  }

  logout = () => {
    cookie.remove('auth')
    this.setLoginState(false)
  }

  setLoginState = loggedIn => {
    this.setState({ loggedIn })
  }

  setCapabilities = capabilities => {
    this.setState({ capabilities })
  }

  verify = token => {
    try {
      const { capabilities } = JWT.verify(token, process.env.REACT_APP_SECRET)
      this.login(token)
      this.setCapabilities(capabilities)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return <LoginContext.Provider value={this.state}>{this.props.children}</LoginContext.Provider>
  }
}

export default LoginProvider
