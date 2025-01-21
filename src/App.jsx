import React from 'react';
import CustomNavbar from './components/user/Navbar/CustomNavbar'; // المسار النسبي الصحيح
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authlayout from './Layouts/Authlayout'
import Dashboard from './Layouts/Dashboardlayout'
import Register from './pages/user/Register/Register'
import Login from './pages/user/Login/Login'
import { ToastContainer } from 'react-toastify';
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Authlayout/>,
      children:[
{path:'register',
  element:<Register/>
},{
  path:'login',
  element:<Login/>
}

      ]
    },{
      path:'/dashboard',
      element:<Dashboard/>
    }
  ]);

  return (
    <>
          <ToastContainer />

      <RouterProvider router={router}/>
    </>
  );
}
