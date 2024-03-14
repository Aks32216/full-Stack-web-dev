import React, { useState } from 'react';

export default function Forms(){

    let [name,setName]=useState("Cricket");

    function handleFormInput(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        setName("");
    }

    return(
        <>
            <h1>Forms in React</h1>
            <form action='' onSubmit={handleSubmit}>
                Choose Your Fav Sports: 
                <select value={name} onChange={handleFormInput}>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Hockey">Hockey</option>
                </select>
                <button >Submit</button>
            </form>
        </>
    )
}