import React, { useState } from 'react';
import UserProvider from './UserProvider';

const UserProviderContext= ({children})=>{

    const [user,setUser]=useState(null);

    return (
        <UserProvider.Provider value={{user,setUser}}>
            {children}
        </UserProvider.Provider>
    )
}

export default UserProviderContext;
