import React from 'react'

import CapabilitiesList from './components/auth/capabilities-list'
import Login from './components/auth/login'
import ToDo from './components/todo'

const App = () => (
  <>
    <Login />
    <CapabilitiesList />
    <ToDo />
  </>
)

export default App
