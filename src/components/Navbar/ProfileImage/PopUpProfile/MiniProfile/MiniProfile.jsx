import React from 'react'
import { useSelector } from 'react-redux'
import image from "./../../../../../assets/Profile/image.png"
export default function MiniProfile() {
    const user = useSelector(state=>state.user)
  return (
    <div className=' flex justify-start w-[300px] gap-3 place-items-center'>
          <div className="image">
              <img src={user?.image?user?.image:image} alt="" className='w-[60px] rounded-full' />
          </div>
          <div className="text">
              <h1 className='text-xl font-medium'>{user?.name }</h1>
              <p className=' font-light text-color-gold'>Begainer</p>
          </div>
    </div>
  )
}
