import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://advanced-yosef-react-server.vercel.app/categories')
	    .then(res => res.json())
		  .then(res => {
        setCategories(res)
        setLoading(false)
		  }
      )
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
	 }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
				categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
	      }
    </List>

  )
  if (loading) {
    return 'Cargando'
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
	       		)
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
