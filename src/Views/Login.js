import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { LOGIN } from '../Apollo/Mutation'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  _confirmLogin = data => {
    // Create Login
    const { token } = data.login.token
    localStorage.setItem('JWT', token)
    this.props.history.push('/')
  }
  render() {
    return (
      <Container>
        <Mutation
          mutation={LOGIN}
          variables={{
            email: this.state.email,
            password: this.state.password
          }}
          onCompleted={data => this._confirmLogin(data)}>
          {login => (
            <Body
              onSubmit={e => {
                e.preventDefault()
                login()
              }}
              autoComplete='off'>
              <Input
                type='username'
                name='email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.handleInputChange}
              />
              <Input
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleInputChange}
              />
              <Button type='submit'>Login</Button>
            </Body>
          )}
        </Mutation>
      </Container>
    )
  }
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
const Body = styled.form`
  background: lightsalmon;
  border: 1px solid salmon;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92vh;
  padding: 15px;
  margin: 2vh 0;
  width: 65%;
`
const Input = styled.input`
  background: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid white;
  padding: 5px 10px;
  color: white;
  width: 50%;
  font-size: 1.5rem;
  :nth-child(2) {
    margin-top: 25px;
  }
`
const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;
  width: 20%;
  cursor: pointer;
  margin-top: 30px;
  color: white;
  font-size: 1.5rem;
  :hover {
    background: coral;
  }
`
