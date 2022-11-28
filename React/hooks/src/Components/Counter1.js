import React from 'react';

function Counter1(){

    let [count,setCount]=React.useState(0);

    function incrementCounter(){
        setCount((count)=>{
            return count+1;
        });
    }

    function decrementCounter(){
        setCount((count)=>{
            return count-1; 
        });
    }

    React.useEffect(()=>{
        setInterval(()=>{
            setCount((count)=>{
                return count+1;
            })
        },1000);
    },[]);

    return (
        <>
            <button onClick={incrementCounter}>Increment</button>
            <span>{count}</span>
            <button onClick={decrementCounter}>Decrement</button>
        </>
    )
}

export default Counter1;