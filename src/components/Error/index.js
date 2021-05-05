import React, { useState } from 'react'
import { ErrorContainer, ErrorTitle, ButtonsContainer, ButtonLogin, ButtonClose } from './styles'

export const Error = ({ error }) => {
  const [close, setClose] = useState(false)
  return (
    <>
      {!close && (
        <ErrorContainer>
            <ErrorTitle>Algo ha salido mal, inicia sesion</ErrorTitle>
            <p>{error.toString()}</p>
          <ButtonsContainer>
            <ButtonClose onClick={() => setClose(!close)}>Cerrar</ButtonClose>
            <ButtonLogin to='/favs'>Iniciar sesion</ButtonLogin>
          </ButtonsContainer>
        </ErrorContainer>
      )}
    </>
  )
} 
