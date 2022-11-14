import React, {useEffect} from 'react'
import {GET_ALL_USER} from '../graphql/Queries'
import {DELETE_USER} from '../graphql/Mutation'
import {useQuery, useMutation} from '@apollo/client'

export const ListUser = () => {
  const {data} = useQuery(GET_ALL_USER);
  const [deleteUser] = useMutation(DELETE_USER)
  const executeDelete = ( id: number ): void => {
    deleteUser({ variables: { id: id as any}})
  }
  return (
    <div>
        { data && data.getAllUser.map((user: any, index:any)=> {
            return (
                <div key={index}>
                    {user.name} / { user.username}
                    <button onClick={()=>{executeDelete(user.id)}}>Delete user</button>
                </div>
            )
        })}
    </div>
  )
}
