import React, { useEffect, useState } from 'react'
import UserInfoBox from './UserInfoBox/UserInfoBox'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateUser } from '../../../../../Store/ProjectSlice'
import useUpdateUserResponse from '../../../../CustomHooks/useUserUpdate'


export default function UserInfo({ tempUser }) {
    
    const user = useSelector(state => state.user)
    const isUser = user?._id == tempUser?._id
  const data = tempUser
    const dispatch = useDispatch()
    const [formdata, setFormData] = useState({
        name:tempUser?.name?tempUser?.name:"",
        email: tempUser?.email ? tempUser?.email : "",
    })
    if (formdata.email == "") {
        
    }
    useEffect(() => {
        
        setFormData(prev => {
            return isUser ? {
                name: user?.name,
                email:user?.email
            } : {
                    name: tempUser?.name,
                    email: tempUser?.email
            }
        })
       
    },[isUser?user:tempUser])
    function AddValue(e) {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (formdata) {
            const res = await useUpdateUserResponse(user?._id, formdata)
            if (res.success == true) {
                dispatch(useUpdateUser(formdata))
            }
        }
    }
   
    return (
        <div className='flex bg-white rounded-lg justify-center place-items-center flex-col gap-3 p-6'>
            <form onSubmit={handleSubmit} action="" className="form w-full">
                <UserInfoBox
                    title={"Full Name"}
                    name="name"
                    value={formdata.name}
                    onChange={AddValue}
                    isUser={isUser}
                />
                <UserInfoBox
                    title={"Email Address"}
                    name="email"
                    value={formdata?.email}
                    onChange={AddValue}
                    isUser={isUser}
                />
                {isUser && < div className="button pt-4 flex gap-3">
                <button className='px-4 py-1 text-sm rounded-md bg-gold-shade'>Save</button>
                <button className='px-4 py-1 text-sm rounded-md bg-dark-shade'>Change Password</button>
        </div>}
          </form>
      
    </div>
  )
}
