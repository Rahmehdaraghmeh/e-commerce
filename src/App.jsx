import React from 'react';
import CustomNavbar from './components/user/Navbar/CustomNavbar'; // المسار النسبي الصحيح
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authlayout from './Layouts/Authlayout'
import Dashboard from './Layouts/Dashboardlayout'
import Register from './pages/user/Register/Register'
import Login from './pages/user/Login/Login'
import { ToastContainer } from 'react-toastify';
import Userlayout from './Layouts/Userlayout';
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Catogary/Categories';
import Products from './pages/user/Products/Products';
import CategoryProducts from './pages/user/Products/CategoryProducts';
import ProductDetails from './pages/user/Products/ProductDetails/ProductDetails';
import Cart from './pages/user/Cart/Cart';
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/auth',
      element:<Authlayout/>,
      children:[
{path:'register',
  element:<Register/>
},{
  path:'login',
  element:<Login/>
}

      ]
    },
    {
      path:'/',
      element:<Userlayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'Categories',
          element:<Categories/>
        },{
          path:'Categories/:categoryid',
          element:<CategoryProducts/>
        },
        {
          path:'Products',
          element:<Products/>
        },{
          path:'Product/:productId',
          element:<ProductDetails/>
        },
        {
          path:'Cart',
          element:<Cart/>
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
