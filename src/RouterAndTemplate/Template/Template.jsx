import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DaisyNabar from '../../components/Navbar/DaisyNabar'

export default function Template({children}) {
  return (
    <div>
      <Navbar/>
          <Outlet />
          <Footer/>
    </div>
  )
}
