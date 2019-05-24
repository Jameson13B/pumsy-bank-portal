import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { USER_PROFILE } from '../Apollo/Query'

class ProfileUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentEmail: ''
    }
  }
  render() {
    return (
      <Query query={USER_PROFILE}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          let user = data.user

          return (
            <Container>
              <Name>{user.name}</Name>
              <h1>Class: {user.class}</h1>
              <h1>Student: {user.email}</h1>
              <h1>Parent: {user.parentEmail}</h1>
              <Balance>Current Balance: {user.balance}</Balance>
              <Update>
                To update above info, email{' '}
                <a href='mailto:cbrown@email.com'>cbrown@email.com</a>
              </Update>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default ProfileUpdate

const Container = styled.div`
  padding: 15px;
  font-size: 1.5rem;
  h1 {
    margin: 25px 0;
    :nth-child(1) {
      margin-top: 0;
    }
  }
`
const Name = styled.h1`
  font-size: 3rem;
`
const Balance = styled.h1`
  font-size: 2rem;
`
const Update = styled.p`
  font-size: 0.8rem;
  font-style: italic;
`
