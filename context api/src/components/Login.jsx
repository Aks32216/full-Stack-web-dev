import React,{useContext, useState} from 'react'
import UserProvider from '../context/UserProvider'

function Login() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(UserProvider);

    function handleSubmit(e){
        e.preventDefault();

        setUser({username,password});

        setUsername("");
        setPassword("");
    }

  return (
    <>
        <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type='text' placeholder='Username'/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login