import React from 'react';
import {connect} from 'react-redux';

function CounterRedux(props){

    // console.log(props);
    let count=props.count;
    return (
        <>
            <h1>Counter</h1>
            <button onClick={props.increment}>+</button>
            <span>Count : {count}</span>
            <button onClick={props.decrement}>-</button>
        </>
    )
}

// provides all the states of store and provides it to component

function mapStateToProps(state){
    return state.count;
}

// it provides dispathc -> which will call the reducer function 
function mapDispatchToProps(dispatch){
    return {        
        increment: ()=>{
            dispatch({type:"increment"})
        },
        decrement: ()=>{
            dispatch({type:"decrement"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterRedux);
 