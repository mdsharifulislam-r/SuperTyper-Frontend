
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyDropDown from './MyDropDown/MyDropDown'
import DropManu from './DropManu/DropManu'
import { motion } from 'framer-motion'
import ProfileImage from './ProfileImage/ProfileImage'
import { useSelector } from 'react-redux'
import DaisyNabar from './DaisyNabar'
import UserBox from './ProfileImage/UserBox'
import Logo from './Logo/Logo'

export default function Navbar() {
    const [isFixed, SetIsFixed] = useState(false)
    const user = useSelector(state => state.user)
   
    window.addEventListener("scroll", () => {
        SetIsFixed(prev => {
            if (window.scrollY > 0) {
                return true
            }
            else {
                return false
            }
        })
    })
    return (
        <motion.div animate className={`${isFixed ? "fixed" : ""} z-[30] transition-all duration-500 w-full h-auto md:h-auto lg:opacity-100 md:opacity-100 shadow-md top-0 left-0   bg-white flex justify-center place-items-center`
} >
            <DaisyNabar />
            <div className={`container hidden md:flex lg:flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between justify-center `}>
              <div className="logoc text-2xl font-bold">
                  <Logo/>
              </div>
             <DropManu/>
                <div className="signup relative lg:top-4   ">
                   <UserBox/>
              </div>
      </div>
    </motion.div>
  )
}
