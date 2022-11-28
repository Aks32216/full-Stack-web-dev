import React,{useReducer,useState} from 'react';

let initialState={
    value:0,
    color:"yellow"
}

function reducer(state,action){
    console.log(action);
    console.log("old state ",state);
    switch(action.type){
        case "increment":
            return {color:state.color,value:state.value+1}
        case "decrement":
            return {color:state.color,value:state.value-1}
        case "incBy5":
            return {color:state.color,value:state.value+5}
        case "decBy5":
            return {color:state.color,value:state.value-5}
        case "reset":
            return {...initialState}
        case "setValue":
            return {color:state.color,value:action.payload}
        case "setColor":
            return {color:action.payload,value:state.value} 
        default:
            return {...initialState}
    }
}

function Counter4(){

    const [stateObj,dispatch]=useReducer(reducer,initialState);
    const [inpValue,setInpValue]=useState("");
    const [inpColor,setInpColor]=useState("");

    console.log("new state ",stateObj);

    return (
        <>
            <h1 style={{color:stateObj.color}}>{stateObj.value}</h1>
            <br></br>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:"incBy5"})}}>+5</button>
            <button onClick={()=>{dispatch({type:"decBy5"})}}>-5</button>
            <br></br>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
            <input placeholder='Value' value={inpValue} onChange={(e)=>{setInpValue(e.target.value)}}></input>
            <button onClick={()=>{dispatch({type:"setValue",payload:inpValue})}}>setValue</button>
            <br></br>
            <input placeholder='Color' value={inpColor} onChange={(e)=>{setInpColor(e.target.value)}}></input>
            <button onClick={()=>{dispatch({type:"setColor",payload:inpColor})}}>setColor</button>
            <br></br>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
        </>
    )
}

export default Counter4;