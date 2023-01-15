// import axios from "axios";

async function getUserMiddleware(dispatch){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let jsonData=await res.json();
        // console.log(jsonData);
        dispatch({type:"setUser",payload:jsonData});
    } 
    catch(err){
        dispatch({type:"setError",payload:"Cant load at this moment"})
    }
    
}

export default getUserMiddleware;