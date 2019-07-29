import React, { useContext } from 'react'
import If from 'react-ifs'

import { LoginContext } from './login-provider'

const CapabilitiesList = () => {
  const { loggedIn, capabilities } = useContext(LoginContext)

  return (
    <If condition={loggedIn}>
      <p>You have the current capabilities: {capabilities ? capabilities.join(', ') : 'none'}</p>
    </If>
  )
}

export default CapabilitiesList
