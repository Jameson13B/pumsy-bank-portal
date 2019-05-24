import gql from 'graphql-tag'

const USER_PROFILE = gql`
  query {
    user {
      id
      name
      email
      parentEmail
      balance
      class
      log {
        id
        change
        description
        createdAt
      }
    }
  }
`
const USER_LOG = gql`
  query {
    user {
      log {
        id
        change
        description
        createdAt
      }
    }
  }
`

export { USER_PROFILE, USER_LOG }
