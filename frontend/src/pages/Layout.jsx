import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div className=' w-full h-full '>
        <Nav/>
      <Outlet/>
    </div>
  )
}

export default Layout