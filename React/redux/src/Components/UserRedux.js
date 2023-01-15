import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import getUserMiddleware from "../Redux/UserMiddleware";

function UserRedux(prop){
    console.log(prop);
    let user=prop.userState;
    const loading=prop.loading;

    useEffect(()=>{
        //calls the middleware funciton so that it can fetch the details of user from backend
        // and then call the reducer method of set user so that data can be updated
        // this is needed because data to redux is not known and we need to fetch from backend
        // so we are using a middleware which can do this work for us
        prop.fetchUser();
    },[])
    console.log("rendered");
    return (
        <>
            {
                loading===true?<h2>...Loading</h2>:<h2>User Data : {user}</h2>
            }
        </>
    )
}

function mapStateToProps(store){
    return store.user;
}

function mapDispatchToprops(dispatch){
    return {
        fetchUser: ()=>{
            // since we dont have data we cannot make direct call to reducer function
            // hence we make call to middleware function
            // now it will be the responsibility of the middleware function to make call to reducer function when data will be available
            // middleware function calls the async funciton when they don't have data
            // but when they have data they will simply call the reducer function
            dispatch(getUserMiddleware);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(UserRedux);