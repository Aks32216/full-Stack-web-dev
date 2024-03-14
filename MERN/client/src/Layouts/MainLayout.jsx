import React from 'react'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </>
  )
}

export default MainLayout