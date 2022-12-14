import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {UPDATE_PASSWORD} from '../graphql/Mutation'


export const UpdatedPassword = () => {
  const [username, setUsername] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD)

  return (
    <div>
        <input type="text" placeholder='username' 
            onChange={(event)=> setUsername(event.target.value)}
        />
        <input type="text" placeholder='Old password' 
            onChange={(event)=> setOldPassword(event.target.value)}
        />
        <input type="text" placeholder='new password' 
            onChange={(event)=> setNewPassword(event.target.value)}
        />
        <button onClick={()=> updatePassword({variables: {username: username, oldPassword: oldPassword, newPassword: newPassword}})}>Update password</button>
    </div>
  )
}
