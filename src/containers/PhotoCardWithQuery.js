import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'

const getSinglePhoto = (id) => {
  const getSingle = gql`
		query getSinglePhoto($id:ID!) {
  	photo(id:$id) {
    	id
    	categoryId
    	src
    	likes
    	userId
    	liked
  	}
	}
	`
  return useQuery(getSingle, { variables: { id } })
}

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = getSinglePhoto(id)
  const photosValid = data ? data.photo : {}
  return <PhotoCard {...photosValid} />
}
