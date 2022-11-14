import { GraphQLString, GraphQLID } from 'graphql'

import { UserType } from "../type-defs/User";
import { MessageType } from '../type-defs/Messages'

import { Users } from '../../entities/Users'
import { IUSer } from '../../interfaces/User';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        await Users.insert({ name, username, password })
        return args
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        const user = await Users.findOne<Users>({ where: { username } })

        if (!user) {
            throw new Error("USERNAME DOESNT EXIST")
        }
        const userPassword = user?.password

        if (oldPassword === userPassword) {
            await Users.update({ username: username }, { password: newPassword })
            return { successful: true, message: "PASSWORD UPDATED" }
        } else {
            throw new Error("Password do not match")
        }
    }
}

export const DETELE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Users.delete(id)
        return { successful: true, message: "DELETE SUCCESS" }
    }
}