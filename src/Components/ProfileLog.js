import React, { Component } from 'react'
import styled from 'styled-components'

class ProfileLog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Container>
        <h1>Log View</h1>
        <h1>Log Displays Here</h1>
      </Container>
    )
  }
}

export default ProfileLog

const Container = styled.div`
  padding: 15px;
`
