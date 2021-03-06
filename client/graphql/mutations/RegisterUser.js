import { gql } from '@apollo/client'

const REGISTER_USER = gql`
  mutation RegisterUser($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      user {
        id
        username
        email
      }
      jwt
    }
  }
`
export default REGISTER_USER
