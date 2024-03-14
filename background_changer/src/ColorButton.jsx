import React from 'react';

export default function ColorButton({color,handleChangeColor}){
    return(
        <button className={`m-3 text-white pl-4 pr-4 rounded-lg w-19 h-6`} style={{backgroundColor: `${color}`}} onClick={()=>{handleChangeColor(color)}}>{color}</button>
        
    )
}