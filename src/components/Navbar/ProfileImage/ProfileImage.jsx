import React, { useState } from 'react'
import image from "./../../../assets/Profile/image.png"
import { useSelector } from 'react-redux'
import PopUpProfile from './PopUpProfile/PopUpProfile'
export default function ProfileImage() {
  const user = useSelector(state => state.user)
  const [show, setShow] = useState(false)
  function ChangeState() {
    setShow(prev=>!prev)
  }
  window.addEventListener("scroll", () => {
    setShow(prev => {
      return prev?false:false
    })
  })
  return (
    <div className='w-[40px] cursor-pointer h-[40px] rounded-full  border relative'>
      <div className='absolute w-full h-full object-cover rounded-full overflow-hidden'>
        <img src={user?.image ? user.image : image} alt="" className='absolute w-full h-full object-cover' onClick={ChangeState} />
      </div>
     
      <PopUpProfile show={show } Callback={ChangeState} />
    </div>
  )
}
