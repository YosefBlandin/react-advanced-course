import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Img } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <>
      <Section>
        {favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Img src={fav.src} />
          </Link>
        )
        )}
      </Section>
    </>
  )
}
