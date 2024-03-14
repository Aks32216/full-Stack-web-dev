import React , {useContext} from 'react';
import UserProviderContext from './context/UserProviderContext';
import UserProvider from './context/UserProvider';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {

  return (
    <UserProviderContext>
      <h2>Context API</h2>
      <Login></Login>
      <Profile></Profile>
    </UserProviderContext>
  )
}

export default App
