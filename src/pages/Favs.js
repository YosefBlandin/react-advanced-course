import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { Layout } from '../components/Layout'
export default () => {
  const { favs } = useGetFavorites()
  return (
    <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <ListOfFavs favs={favs} />
    </Layout>
  )
}
