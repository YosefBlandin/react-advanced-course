import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
    }
  }
`

export const useGetFavorites = () => {
  const { data = { favs: [] } } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })
  const { favs } = data
  return { favs }
}
