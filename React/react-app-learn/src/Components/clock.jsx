import React, { useEffect, useState } from 'react';

export default function Clock(){
  let [date,setDate]=useState(new Date().toLocaleString());

  setInterval(()=>{
    setDate(new Date().toLocaleString());
  },100);

  return (
    <>
      <h1>Bharat Clock</h1>
      <h3>This is the app that show the time of of Bharat</h3>
      <h3>Current Date and Time is : {date}</h3>
    </>
  )
}