import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Components/Icon'
import ProfileUpdate from '../Components/ProfileUpdate'
import ProfileLog from '../Components/ProfileLog'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'profile' // other option 'log'
    }
  }
  componentDidMount() {
    const user = localStorage.getItem('JWT')
    console.log(user)
    if (!user || user === 'undefined') this.props.history.push('/login')
  }
  handleToggleView = e => this.setState({ view: e.target.getAttribute('name') })
  render() {
    return (
      <Container>
        <Header>
          <CstmLink to='/'>
            <Icon icon='home' />
          </CstmLink>
          <h3 style={{ color: 'darkgreen' }}>Profile</h3>
        </Header>
        <Body>
          <Nav>
            <NavBtn name='profile' onClick={this.handleToggleView}>
              Profile
            </NavBtn>
            <NavBtn name='log' onClick={this.handleToggleView}>
              User Log
            </NavBtn>
          </Nav>
          {this.state.view === 'log' ? <ProfileLog /> : <ProfileUpdate />}
        </Body>
      </Container>
    )
  }
}

export default Profile

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
    color: green;
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
  background: lightgreen;
  border: 1px solid green;
  border-radius: 15px;
  height: 84vh
  padding: 2vh;
  width: 65%;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const NavBtn = styled.div`
  border: 1px solid green;
  border-radius: 15px;
  color: darkgreen;
  cursor: pointer;
  padding: 15px;
  width: 20%;
  :hover {
    background: rgb(118, 212, 118);
  }
`
