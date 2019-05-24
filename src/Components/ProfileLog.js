import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { USER_LOG } from '../Apollo/Query'
import moment from 'moment-timezone'
import { storeKeyNameFromField } from '../../node_modules/apollo-utilities'

class ProfileLog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Query query={USER_LOG}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) {
            console.log(error)
            return <div>Error</div>
          }

          let logs = data.user.log
          console.log(logs)

          return (
            <Container>
              {logs.map(log => {
                const date = moment(log.createdAt)
                return (
                  <Entry key={log.id}>
                    <p>{log.change}</p>
                    <p>{log.description}</p>
                    <p>{date.tz('America/Boise').format('l LT')}</p>
                  </Entry>
                )
              })}
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default ProfileLog

const Container = styled.div`
  padding: 15px;
`
const Entry = styled.div`
  display: flex;
  justify-content: space-between
  padding: 15px;
  border-top: 1px solid green;
  :last-child {
    border-bottom: 1px solid green;
  }
`
