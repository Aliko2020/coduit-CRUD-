import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'



const Layout = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Outlet />
        {/* <Footer /> */}
        
    </div>
  )
}

export default Layout