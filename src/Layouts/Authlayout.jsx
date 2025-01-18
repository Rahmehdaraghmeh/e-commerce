import React from 'react'
import CustomNavbar from '../components/user/Navbar/CustomNavbar'; // المسار النسبي الصحيح
import { Outlet } from 'react-router-dom'

export default function Authlayout() {
  return (
    <>
      <CustomNavbar/>
      <Outlet/>
    </>
  )
}
