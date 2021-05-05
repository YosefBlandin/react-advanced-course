import React from 'react'
import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useToggleLikeMutation = () => {
  const [toggleLike, { data }] = useMutation(LIKE_PHOTO)

  return { toggleLike }
}
