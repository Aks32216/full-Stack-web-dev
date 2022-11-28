import React from 'react';
import './App.css';
import Counter from "./Components/Counter";
import store from "./Redux/store";
import {Provider} from "react-redux";
import CounterRedux from './Components/CounterRedux';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Example</h1>
      {/* <Counter></Counter> */}
      <CounterRedux></CounterRedux>
    </Provider>
  );
}

export default App;
