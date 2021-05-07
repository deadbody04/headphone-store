import { GraphQLError } from 'graphql'

export const errorMessage = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    return graphQLErrors.map((err) => {
      const message =
        err?.extensions?.exception?.data?.message[0]?.messages[0]?.message
      switch (message) {
        case 'Username already taken': {
          return 'This login is already taken'
        }
        case 'Email already taken': {
          return 'This email is already taken'
        }
        case 'Identifier or password invalid': {
          return 'Username or email invalid'
        }
        case 'Your account email is not confirmed': {
          return 'Your account email is not confirmed'
        }
        default: {
          return message
        }
      }
    })
  }

  if (networkError) {
    switch (networkError.status) {
      case 403:
        return 'You do not have access rights'
      case 404:
        return 'Page not found'
      case 500:
        return 'Server error'
      case 502:
        return 'invalid server response'
      case 503:
        return 'Service is not available'
      default:
        return networkError.message
    }
  }
  return 'An unexpected error occurred'
}
