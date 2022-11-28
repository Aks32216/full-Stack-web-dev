import React ,{useReducer} from 'react'

function reducer(state,action){
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return state;
    }
}

function Counter() {
    const [count,dispatch]=useReducer(reducer,0);
  return (
    <>
        <h3>Counter</h3>
        <button onClick={()=>{dispatch("increment")}}>+</button>
        <span>Count: {count}</span>
        <button onClick={()=>{dispatch("decrement")}}>-</button>
    </>
  );
}

export default Counter;