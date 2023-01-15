import React from 'react';
import './App.css';
import Counter from "./Components/Counter";
import store from "./Redux/store.js";
import {Provider} from "react-redux";
import CounterRedux from './Components/CounterRedux';
import CounterRedux2 from "./Components/CounterRedux2"
import UserRedux from "./Components/UserRedux"
import Login from './firebaseComp/Login';

function App() {
  return (
    <>
      <h1>Redux Example</h1>
      <Login></Login>
    </>
    
  );
}

// <Provider store={store}>
      {/* <Counter></Counter> */}
      {/* <CounterRedux></CounterRedux>
      <CounterRedux2></CounterRedux2>
      <UserRedux></UserRedux> */}
    // </Provider>

export default App;
