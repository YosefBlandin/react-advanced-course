import React, { useEffect, useRef, useState } from 'react'
import { Error } from '../Error'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { toggleLike, error } = useToggleLikeMutation()
  const [show, element] = useNearScreen()
  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <>
    <Article ref={element}>
      {
  show &&
    <>
      <Link to={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </Link>
      <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
    </>
	}
    </Article>
      {error && <Error error={error} />}
    </>
  )
}
