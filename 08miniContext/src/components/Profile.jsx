import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.usename}</div>
}

export default Profile
