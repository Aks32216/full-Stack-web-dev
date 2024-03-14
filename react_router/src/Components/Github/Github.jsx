import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github() {

    // const [followers,setFollowers]=useState("");

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Aks32216')
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((res)=>{
    //         setFollowers(res.followers)
    //     })
    // },[])

    let data=useLoaderData();

    console.log(data);

  return (
    <div>Github followers : {data.followers}</div>
  )
}


export const githubInfoLoader = async ()=>{
  const response= await fetch('https://api.github.com/users/Aks32216');
  return response.json();
}