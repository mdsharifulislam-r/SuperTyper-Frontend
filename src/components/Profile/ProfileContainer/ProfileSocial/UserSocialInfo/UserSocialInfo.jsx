import React, { useEffect, useState } from 'react'
import image from "../../../../../assets/Profile/image.png"
import { useDispatch, useSelector } from 'react-redux'
import { getTime, GetUserSkill, useUpdateUser } from '../../../../../Store/ProjectSlice'
import getAvarage from '../../../../Helper/getAvarage'
import getTitle from '../../../../Helper/getTitle'
import { FaCamera } from 'react-icons/fa'
import UseAxios from '../../../../CustomHooks/UseAxios'

import useUpdateUserResponse from '../../../../CustomHooks/useUserUpdate'
import useImageUpload from '../../../../CustomHooks/useImageUpload'
import useUpdateFollowers from '../../../../CustomHooks/useUpdateFollowers'
import useFindUser from '../../../../CustomHooks/useFindUser'
import { toast } from 'react-toastify'
export default function UserSocialInfo({tempUser}) {
  const dispatch = useDispatch()
  const own = useSelector(state => state.user)
  const user = tempUser
  const isUser = own._id === tempUser?._id

  useEffect(() => {
    dispatch(GetUserSkill(user?._id))
  }, [tempUser])
  const userSkill = useSelector(state => state.userSkill)
  const data = getAvarage(userSkill?.daily)
  
  const title = getTitle(data?.wpm)
  
  async function UploadImage(e)
  {
    const instence = UseAxios()
    const image = e.target.files[0]

    const res = await useImageUpload(image)
    const newUser = {
      ...user,
      image: res?.display_url,
    };
    const updateResponse = await useUpdateUserResponse(user._id, newUser)

    if (updateResponse.success) {
      dispatch(useUpdateUser(newUser))
    }

  }
  const isFollow = tempUser?.followers?.some(id=>id==own._id)
  async function Follower() {

    if (own?.name) {
    
      const res = await useUpdateFollowers(tempUser?._id, {
        type: "followers",
        id: own?._id
      })
      console.log(res);
      if (res?.success) {
  
        const follow = await useUpdateFollowers(own?._id, {
          type: "following",
          id: tempUser?._id
        })
   
      }
    } else {
      toast.error("You Have to Login first")
    }
  }

  async function Unfollow() {
  
    const kala = await useUpdateFollowers(own?._id, {
      type: "unfollow",
      id: tempUser?._id
    })
  console.log(kala);
  }
  return (
    <div className='flex bg-white rounded-lg justify-center place-items-center flex-col gap-3 p-6'>
          <div className="imageBox w-full h-[50%]  flex justify-center place-items-center">
              
        <img src={user?.image ? user?.image : image} alt="" className='w-[100px] object-cover h-[100px] relative border border-orange-400 rounded-full' >
          
        </img>
        {isUser && <div className=" absolute flex cursor-pointer justify-center place-items-center shafe w-[100px] object-cover h-[100px] bg-[rgba(0,0,0,0.3)] border border-orange-400 rounded-full">
          <input type="file" onChange={UploadImage} className='opacity-0' />
          <span className='text-xl text-white absolute pointer-events-none'><FaCamera /></span>
        </div>}
              
          </div>
          <div className="text-box w-full h-[50%] flex justify-center place-items-center flex-col gap-1">
        <h1 className='text-lg font-bold'>{user?.name }</h1>
        <span className='text-2xl stroke-slate-600 text-color-gold '>{title }</span>
              <div className='flex justify-center place-items-center gap-5 text-sm text-color font-thin py-3'>
          <span>{tempUser.followers?.length } Followers</span>
                  <span>{tempUser.following?.length} Following</span>
              </div>
        {!isUser && <div className="button flex justify-center gap-3 w-full ">
          {isFollow ? <button className='px-3 py-2 bg-gold-shade rounded-lg text-sm' onClick={Unfollow} >unfollow</button> : <button className='px-3 py-2 bg-gold-shade rounded-lg text-sm' onClick={Follower}>Follow</button>} 
          <button className='px-3 py-2 bg-dark-shade rounded-lg text-sm'>Massage</button>
        </div>}
          </div>
    </div>
  )
}
