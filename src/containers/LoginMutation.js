import React from 'react'
import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
	login(input: $input)
}
`
export const useLoginMutation = () => {
  const [login, { error: loginError, loading: loginLoading }] = useMutation(LOGIN)
  return { login, loginError, loginLoading }
}
