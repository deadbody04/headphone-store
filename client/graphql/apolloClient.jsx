import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  createHttpLink,
} from '@apollo/client'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = Cookies.get('token')
  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      },
    }))
  }
  return forward(operation)
})

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    link: from([
      authMiddleware,
      createHttpLink({
        uri: `http://localhost:1337/graphql`,
        credentials: `same-origin`,
        fetch,
      }),
    ]),
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(initialState || {}),
  })
})
