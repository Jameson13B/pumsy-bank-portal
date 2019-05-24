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
          if (error) {
            console.log(error)
            return <div>Error</div>
          }

          let user = data.user

          return (
            <Container>
              <h1>{user.name}</h1>
              <h1>Class: {user.class}</h1>
              <h1>Student: {user.email}</h1>
              <h1>Parent: {user.parentEmail}</h1>
              <h1>Balance: {user.balance}</h1>
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
`
