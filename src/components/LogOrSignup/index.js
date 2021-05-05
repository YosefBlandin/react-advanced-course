import React from 'react'              
import { Section, ButtonLogin, ButtonRegister, ButtonsContainer } from './styles'
import LogSvg from './LogSvg'
export const LogOrSignup = ( { setSection } ) => {
  return (   
    <Section>
      <LogSvg />
      <ButtonsContainer>
      <ButtonRegister onClick={() => setSection('register')}>Registrarse</ButtonRegister>
      <ButtonLogin onClick={() => setSection('login')}>Iniciar sesión</ButtonLogin>
      </ButtonsContainer>
    </Section>
  )
}
