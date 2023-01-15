
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAliWsDIKjTjx6PKN7jmGOqCTQbB6srwOw",
  authDomain: "fir-learning-6befd.firebaseapp.com",
  projectId: "fir-learning-6befd",
  storageBucket: "fir-learning-6befd.appspot.com",
  messagingSenderId: "930341836948",
  appId: "1:930341836948:web:f29c23e97948faac5dbc81"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const googleAuth=new firebase.auth.GoogleAuthProvider();
export default firebase;