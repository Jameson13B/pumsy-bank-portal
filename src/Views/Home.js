import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Components/Icon'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const user = localStorage.getItem('JWT')
    if (!user) this.props.history.push('/login')
  }
  handleLogout = () => {
    localStorage.removeItem('JWT')
    this.props.history.push('/login')
  }
  render() {
    return (
      <Container>
        <Title>Pumsy Bank System</Title>
        <BtnPanel>
          <IconBtn color='blue'>
            <CstmLink to='/store' color='blue'>
              <p>Store</p>
              <Icon icon='store' />
            </CstmLink>
          </IconBtn>
          <IconBtn color='salmon' onClick={this.handleLogout}>
            <Logout color='salmon'>
              <p>Logout</p>
              <Icon icon='lock' />
            </Logout>
          </IconBtn>
          <IconBtn color='green'>
            <CstmLink to='/profile' color='green'>
              <p>Profile</p>
              <Icon icon='face' />
            </CstmLink>
          </IconBtn>
        </BtnPanel>
        <br />
        <span
          style={{ fontSize: '1rem', padding: '15px', color: 'darkorange' }}>
          By Atomic10 Studios
        </span>
      </Container>
    )
  }
}

export default Home

const Container = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #282c34;
  a {
    margin: 30px auto;
  }
`
const Title = styled.h1`
  font-size: 2.5rem;
  margin: 30px auto;
  color: red;
`
const BtnPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 65%;
`
const IconBtn = styled.div`
  border: ${props => `1px solid ${props.color}`};
  border-radius: 15px;
  padding: 15px;
  width: 20%;
  cursor: pointer;
  :hover {
    background: ${props =>
      props.color === 'salmon' ? 'lightpink' : `light${props.color}`};
  }
  i {
    padding: 15px;
    display: block;
  }
`
const CstmLink = styled(Link)`
  text-decoration: none;
  color: ${props => `${props.color}`};
  font-size: 1.25rem;
`
const Logout = styled.div`
  text-decoration: none;
  color: ${props => `${props.color}`};
  font-size: 1.25rem;
`
