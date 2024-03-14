import React, { useState } from 'react';

export default function CounterApp(){

    let [counter,setCounter]=useState(0);

    function handleAddValue(){
        console.log("value added");
        setCounter((prevCounter)=>{
            return prevCounter+1;
        })
    }

    function handleDeleteValue(){
        setCounter((prevCounter)=>{
            return prevCounter===0?prevCounter:prevCounter-1;
        })
    }

    return(
        <>
            <h1>counter value: {counter}</h1>
            <button onClick={handleAddValue}>Add Value</button><br></br>
            <button onClick={handleDeleteValue}>Decrease value</button>
        </>
    )
}