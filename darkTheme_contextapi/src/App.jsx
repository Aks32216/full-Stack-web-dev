import React, { useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { ThemeProvider } from './Context/ThemeContext';

function App() {

  const [themeMode,setThemMode]=useState("light");
  
  const lightTheme=()=>{
    setThemMode("light");
  }
  
  const darkTheme=()=>{
    setThemMode("dark");
  }



  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn></ThemeBtn>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card></Card>
            </div>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
