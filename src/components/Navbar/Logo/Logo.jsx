import React from 'react'
import image from "../../../assets/Logo/logo.png"
import { useNavigate } from 'react-router-dom'
export default function Logo() {
    const navigate = useNavigate()
    
  return (
      <div className=' cursor-pointer ' onClick={() => {navigate("/") }}>
      <img src={image} alt="" className='h-16' />
    </div>
  )
}
