import React from 'react';
import "../style.css";

function Counter() {
    let [count,setCount]=React.useState(0);
  
    function incrementHandler(){
        setCount((count)=>{
            return count+1;
        })
    }

    function decrementHandler(){
        setCount((count)=>{
            return count-1;
        })
    }

    return (
    <div className="counterButton">
        <button className="button" onClick={incrementHandler} >Increment</button>
        <span className="number">{count}</span>
        <button className="button" onClick={decrementHandler} >Decrement</button>
    </div>
  )
}
  
export default Counter;