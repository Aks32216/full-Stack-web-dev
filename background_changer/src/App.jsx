import React, { useState } from 'react';
import ColorButton from './ColorButton';

export default function App(){

  let colorArray=["red","green","blue","yellow","violet","purple","aliceblue","indigo","black","olive"]

  let [curColor,setCurColor]=useState("red");

  function handleChangeColor(color){
    setCurColor(color);
  }

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: curColor}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
          <div className='bg-white rounded-lg'>
            {colorArray.map((color)=>{
              return (
                <ColorButton color={color} handleChangeColor={handleChangeColor}></ColorButton>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}