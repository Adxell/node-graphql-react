import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { GET_ALL_USER } from './queries/User'
import { CREATE_USER, DETELE_USER, UPDATE_PASSWORD } from './mutations/User'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUser: GET_ALL_USER
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DETELE_USER,
        updatePassword: UPDATE_PASSWORD
    }
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})