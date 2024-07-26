import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export default function AuthLogin() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    
  return user?.name ? navigate("/"):<Outlet/>
}
