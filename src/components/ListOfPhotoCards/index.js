import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hoc/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: [] } } = useGetPhotos(categoryId)
  const dataWait = data ? data.photos : []
  return (
    <ul>
      {dataWait.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
