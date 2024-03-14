import React, { useContext } from 'react'
import UserProvider from '../context/UserProvider'

function Profile() {

    const {user}=useContext(UserProvider);

  return (
    <div>
        {!user ? `<div>Login</div>` : `<div>${user.username} has ${user.password}</div>`}
    </div>
  )
}

export default Profile