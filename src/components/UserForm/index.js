import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Img, Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'
export const UserForm = ({ title, onSubmit, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const variables = { email: email.value, password: password.value }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ ...variables })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Img src='https://images.vexels.com/media/users/3/162401/isolated/preview/ba1bd4d3df96d1b16a0e1fe2249757a1-cachorro-perro-lengua-cola-oreja-plana-by-vexels.png' />
      <Input disabled={disabled} placeholder='Email' {...email} />
      <Input disabled={disabled} placeholder='Password' type='password' {...password} />
      <SubmitButton disabled={disabled}>{title}</SubmitButton>
      {error && (<Error>{error}</Error>)}
    </Form>
  )
}
