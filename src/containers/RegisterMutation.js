import React from 'react'
import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
	signup(input: $input)
}
`
export const useRegisterMutation = () => {
  const [register, { error: registerError, loading: registerLoading }] = useMutation(REGISTER)
  return { register, registerError, registerLoading }
}
