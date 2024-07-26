import React, { useEffect, useState } from 'react'
import ProfileSocial from './ProfileSocial/ProfileSocial'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { useParams } from 'react-router-dom'
import useFindUser from '../../CustomHooks/useFindUser'

export default function ProfileContainer() {
  const { id } = useParams()
  const [tempUser,setTempUser]=useState({})
  async function GetData() {
    const res = await useFindUser(id)
    if (res) {
      setTempUser(res)
    }
  }
 GetData()

  return (
    <div className='w-ful bg-dark-shade'>
          <div className="container flex flex-col lg:flex-row md:flex-row justify-center  gap-3">
              <ProfileSocial tempUser={tempUser} />
              <ProfileInfo tempUser={tempUser} />
      </div>
    </div>
  )
}
