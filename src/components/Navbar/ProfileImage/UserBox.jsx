import React from 'react'
import ProfileImage from './ProfileImage'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserBox() {
    const user = useSelector(state=>state.user)
    return (
        <div className='mt-5 lg:mt-0 md:mt-3'>
            {user?.name ? <ProfileImage /> : <Link to={"/login"} className='px-4 py-2 bg-red text-white relative lg:top-2 rounded-md text-sm font-bold'>Sign In</Link>}
      </div>
      
  )
}
