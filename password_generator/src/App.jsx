import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {

  let [length,setLength]=useState(8);
  let [isNumber,setIsNumber]=useState(false);
  let [isCharacter,setIsCharacter]=useState(false);
  let [password,setPassword]=useState("");
  let passwordRef=useRef(null);


  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumber){
      str+="0123456789";
    }
    if(isCharacter){
      str+="@#$%^&*!+=";
    }

    for(let i=0;i<length;++i){
      let index=Math.floor(Math.random()*str.length);
      pass+=str.charAt(index)
    }

    console.log(pass);
    setPassword(pass);


  },[length,isNumber,isCharacter,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,isCharacter,isNumber,passwordGenerator]);


  function copyPasswordToClipboard(){
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flext items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={isNumber} id="numberInput" onChange={()=>{setIsNumber((prev)=>{return !prev})}}/>
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={isCharacter} id="characterInput" onChange={()=>{setIsCharacter((prev)=>{return !prev})}}/>
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
