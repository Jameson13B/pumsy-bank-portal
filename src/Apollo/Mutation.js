import gql from 'graphql-tag'

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export { LOGIN }
