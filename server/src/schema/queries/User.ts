import { GraphQLList } from 'graphql'

import { Users } from '../../entities/Users'
import { IUSer } from '../../interfaces/User'

import { UserType } from '../type-defs/User'

export const GET_ALL_USER = {
    type: new GraphQLList(UserType),
    resolve(): Promise<IUSer[]> {
        return Users.find()
    }
}