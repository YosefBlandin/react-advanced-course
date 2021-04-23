import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createHttpLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { GlobalStyle } from './styles/GlobalStyles'
import { setContext } from '@apollo/client/link/context'
import Context from './context/Context'

const GRAPH_URL = 'https://advanced-yosef-react-yosefblandin.vercel.app/graphql'

const httpLink = createHttpLink({
  uri: GRAPH_URL
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
