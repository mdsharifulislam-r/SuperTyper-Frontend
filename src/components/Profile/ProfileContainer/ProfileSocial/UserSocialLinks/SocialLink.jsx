import React, { useState } from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useUpdateUserResponse from '../../../../CustomHooks/useUserUpdate'
import { useUpdateUser } from '../../../../../Store/ProjectSlice'

export default function SocialLink({ name, value,index,tempUser}) {
  const user = useSelector(state => state.user)
  const isUser = user?._id == tempUser._id
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    key: name,
    link:value
  })
  function AddValue(e) {
    
    const { name, value } = e.target
    
    setFormData(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const [isEdit, setEdit] = useState(false)
  function ChangeEdit() {
    setEdit(prev=>!prev)
  }
  async function Delete() {
    const tempLinks = [...user.social]?.filter(data => data.link!==value)
    const newUser = {
      ...user,
      social: tempLinks,
      
    }
    const userResponse =await useUpdateUserResponse(user?._id, newUser)
    if (userResponse.success) {
      dispatch(useUpdateUser(newUser))
    }
  }
  async function SubmitEdit() {
    let temp = [...user?.social]
    temp[index] = formData
    const newUser = {
      ...user,
      social:temp,
    }
  
    const userResponse = await useUpdateUserResponse(user?._id, newUser)
   
    if (userResponse.success) {
      dispatch(useUpdateUser(newUser))
      ChangeEdit()
    }
  }
 
  return (
      <div className='flex justify-between overflow-hidden'>
      {!isEdit  ? <div className="text pr-3 mr-4">{name}</div> : <input value={formData.key} onChange={AddValue} name='key' type="text" placeholder='Key' className='w-[30%] text-sm border focus:outline-none rounded-md p-3' />}
      
      <div className='flex gap-3 group'>
        {!isEdit ? <a href={value} className=' font-thin text-slate-400'>{value}</a> : <input onChange={AddValue} value={formData.link} name='link'  type="text" placeholder='Link' className='w-[70%] text-sm border focus:outline-none rounded-md p-3' />}
        {isUser && <div className='flex gap-2'>
          <button className='w-0 group-hover:w-full hidden group-hover:block transition duration-150 text-color-gold' onClick={ChangeEdit}><FaEdit /></button>
          {!isEdit ? <button onClick={Delete} className='w-0 group-hover:w-full hidden group-hover:block transition duration-150 text-red-400'><FaTrash /></button> : <button onClick={SubmitEdit} className='w-0 group-hover:w-full hidden group-hover:block transition duration-150 text-green-400'><FaCheck /></button>}
        </div>}
      </div>
    
      </div>
  )
}
