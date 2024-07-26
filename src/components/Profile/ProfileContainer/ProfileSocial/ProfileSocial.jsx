import React from 'react'
import UserSocialInfo from './UserSocialInfo/UserSocialInfo'
import UserSocialLinks from './UserSocialLinks/UserSocialLinks'

export default function ProfileSocial({tempUser}) {
  return (
    <div className='lg:w-[40%] md:w-[40%] lg:p-4 md:p-3 '>
      <UserSocialInfo tempUser={tempUser} />
      <UserSocialLinks tempUser={tempUser}/>
    </div>
  )
}
