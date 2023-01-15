import React from 'react';
import firebase,{googleAuth} from '../firebase';

function Login(){
    function googleLogin(){
            firebase.auth()
            .signInWithPopup(googleAuth)
            .then((result) => {
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            // var user = result.user; 
            // ...
        })
    }
    return (
        <>
            <h2>Firebase Login Example</h2>
            <button onClick={googleLogin}>Login</button>
        </>
    )
}

export default Login;