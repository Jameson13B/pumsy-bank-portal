import gql from 'graphql-tag'

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`
const PURCHASE = gql`
  mutation($id: ID!, $points: String!, $description: String!) {
    purchase(id: $id, points: $points, description: $description) {
      id
      balance
    }
  }
`

export { LOGIN, PURCHASE }
