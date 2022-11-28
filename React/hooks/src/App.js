import React from 'react';
import './App.css';
// import Counter from "./Components/Counter";
// import Counter1 from "./Components/Counter1";
// import Counter3 from "./Components/Counter3";
// import PageNotFound  from './Components/PageNotFound';
import Counter4 from './Components/Counter4';
// import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div>
      {/* <h1> hello world</h1> */}
        {/* <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/counter1" element={<Counter1 />}></Route>
          <Route path="/counter3" element={<Counter3 />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes> */}
        <Counter4></Counter4>
    </div>
  )
}

export default App;
