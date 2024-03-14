import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter,Route, createRoutesFromElements} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './components/Home.jsx'
import Register from './components/Register.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
