import React from 'react'
import CustomNavbar from '../components/user/Navbar/CustomNavbar'
import { Outlet } from 'react-router-dom'

export default function Userlayout() {
  return (
    <>
    <CustomNavbar/>
    <Outlet/>
    </>
  )
}
