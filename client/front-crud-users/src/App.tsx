import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {ApolloClient, InMemoryCache, ApolloProvider, useMutation} from '@apollo/client'
import {CREATE_USER} from './graphql/Mutation'
import './App.css'
import { CreateUser } from './components/CreateUser'
import { ListUser } from './components/ListUser'
import { UpdatedPassword } from './components/UpdatedPassword'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })
  console.log('hi')
  return (
    <>
    <ApolloProvider client={client}>
      
      <CreateUser />
      <ListUser />
      <UpdatedPassword />
    </ApolloProvider>
    </>
  )
}

export default App
