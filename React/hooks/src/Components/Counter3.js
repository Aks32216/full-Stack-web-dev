import React from 'react';
// learning useReducer

// put initial state and reducer function where all the function related to states are handled
const initailState=9;

function reducer(state,action){
    console.log("state value at reducer ",state);
    console.log("reducer rendering");
    console.log(action);
    switch(action){
        case "incrementByFive":
            return state+5;
        case "incrementCounter":
            return state+1;
        case "decrementByFive":
            return state-5;
        case "decrementCounter":
            return state-1;
        default:
            return state; 
    }
}

function Counter3(){
    // declare the state variable and then declare the dispatch function provided by react
    let [count,dispatch]=React.useReducer(reducer,initailState);
    console.log("main rendering ",count);
    return (
        <> 
            <button onClick={()=>{dispatch("incrementByFive")}}>Increment Five</button>
            <button onClick={()=>{dispatch("incrementCounter")}}>Increment</button>
            <span>{count}</span>
            <button onClick={()=>{dispatch("decrementCounter")}}>Decrement</button>
            <button onClick={()=>{dispatch("decrementByFive")}}>Decrement Five</button>
        </>
    )
}

export default Counter3;