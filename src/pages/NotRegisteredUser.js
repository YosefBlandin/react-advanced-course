import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoginMutation } from '../containers/LoginMutation'
import { useRegisterMutation } from '../containers/RegisterMutation'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const history = useHistory()
  const { register, registerLoading, registerError } = useRegisterMutation()
  const { login, loginLoading, loginError } = useLoginMutation()
  return (
    <>
      {
				(() => {
				  const onSubmitRegister = ({ email, password }) => {
				    const input = { input: { email, password } }
				    register({ variables: input })
				      .then(({ data }) => {
				        const { signup: signupData } = data
				        activateAuth(signupData)
				        history.push('/')
				      })
				  }
					 const onSubmitLogin = ({ email, password }) => {
				    const input = { input: { email, password } }
				    login({ variables: input })
							 .then(({ data }) => {
								 const { login: loginData } = data
								 activateAuth(loginData)
								 history.push('/')
							 })
				  }
				  return (
  <>
    <UserForm title='Iniciar Sesiòn' error={loginError && 'Datos incorrectos'} disabled={loginLoading} onSubmit={onSubmitLogin} />
    <UserForm title='Registrarse' error={registerError && 'El correo ya existe'} disabled={registerLoading} onSubmit={onSubmitRegister} />

  </>
				  )
				})()
			}
    </>
  )
}
