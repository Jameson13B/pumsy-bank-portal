import React, { Component } from 'react'
import styled from 'styled-components'

class ProfileUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentEmail: ''
    }
  }
  render() {
    return (
      <Container>
        <h1>Profile View</h1>
        <h1>Update Here</h1>
      </Container>
    )
  }
}

export default ProfileUpdate

const Container = styled.div`
  padding: 15px;
`
