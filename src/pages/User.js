import React, { useContext } from 'react'
import { Section } from '../styles/User.js'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../context/Context'
import { Layout } from '../components/Layout'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario' subtitle='Aqui puedes administrar tu cuenta'>
      <Section>
      <SubmitButton onClick={removeAuth}>Cerrar Sesiòn</SubmitButton>
      </Section>
    </Layout>
  )
}
