import { gql } from '@apollo/client'

const DATA = gql`
  query {
    products {
      id
      model
      description
      price
      image {
        url
      }
      SKU
      color
    }
  }
`
export default DATA
