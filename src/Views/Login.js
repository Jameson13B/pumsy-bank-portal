import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Components/Icon'

const Login = props => {
  return (
    <Container>
      <Header>
        <CstmLink to='/'>
          <Icon icon='home' />
        </CstmLink>
        <h3 style={{ color: 'salmon' }}>Login</h3>
      </Header>
      <Body>Login</Body>
    </Container>
  )
}

export default Login

const Container = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #282c34;
`
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  height: 9vh;
  i {
    color: salmon;
  }
`
const CstmLink = styled(Link)`
  text-decoration: none;
  color: white;
  vertical-align: middle;
  margin-right: 15px;
  :hover {
    color: #bbb;
  }
`
const Body = styled.div`
  background: lightsalmon;
  border: 1px solid salmon;
  border-radius: 15px;
  height: 84vh
  padding: 2vh;
  width: 65%;
`
