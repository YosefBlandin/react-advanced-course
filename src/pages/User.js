import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../context/Context'
import { Layout } from '../components/Layout'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario' subtitle='Aqui puedes administrar tu cuenta'>
      <SubmitButton onClick={removeAuth}>Cerrar Sesiòn</SubmitButton>
    </Layout>
  )
}
