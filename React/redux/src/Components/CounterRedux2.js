import React,{useState} from 'react';
import { connect } from 'react-redux';

function CounterRedux2(props){
    const [value,setValue]=useState("");
    return (
        <>
            <h1>Bat Example</h1>
            <span>Current Bats: {props.bat}</span>
            <br></br>
            <input value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <button onClick={()=>{
                props.buy(value);
                setValue("");
            }}>Buy</button>
        </>
    )
}

function mapStateToProps(state)
{
    return state.bat;
}

function mapDispatchToprops(dispatch){
    return {
        buy: (value)=>{
            dispatch({type: "buy",payload: value})
        },
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(CounterRedux2);