import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Views/Home'
import Login from './Views/Login'
import Store from './Views/Store'
import Profile from './Views/Profile'

function App() {
  return (
    <AppContainer>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/store' component={Store} />
      <Route path='/profile' component={Profile} />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  text-align: center;
`
