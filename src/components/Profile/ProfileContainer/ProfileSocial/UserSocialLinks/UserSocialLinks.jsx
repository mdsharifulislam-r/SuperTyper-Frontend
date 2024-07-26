import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddSocialLinks from './AddSocialLinks/AddSocialLinks'
import { useSelector } from 'react-redux'
import SocialLink from './SocialLink'

export default function UserSocialLinks({tempUser}) {
  const own = useSelector(state => state.user)
  const user = tempUser
  const isUser = own._id == tempUser._id
    const linkArr = user?.social?.map((data,index) => {
        return <SocialLink tempUser={tempUser} key={index} index={index} name={data.key} value={data.link}/>
    })
  return (
      <div className='bg-white rounded-lg justify-center place-items-center flex-col gap-3 p-6 mt-4'>
          <div className="links w-full flex flex-col gap-3">
              {linkArr}
          </div>
      {isUser && <AddSocialLinks tempUser={tempUser} />}
    </div>
  )
}
