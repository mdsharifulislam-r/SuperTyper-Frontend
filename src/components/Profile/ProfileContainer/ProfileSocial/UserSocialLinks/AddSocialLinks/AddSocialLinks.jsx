import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useUpdateUserResponse from '../../../../../CustomHooks/useUserUpdate'
import { useUpdateUser } from '../../../../../../Store/ProjectSlice'
import { toast } from 'react-toastify'

export default function AddSocialLinks({tempUser}) {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const [formdata, setFormData] = useState({
        key: "",
        link:""
    })
    function Addvalue(e)
    {
        
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const [add, setAdd] = useState(false)
    function ChangeValue() {
        setAdd(prev => !prev)
    }
    async function  HandleSubmit(e) {
        const { key, link } = formdata
   
        if (key && link) {
            if (user) {
                const data = {
                    ...user,
                    social: user?.social ? [...user?.social, formdata] : [formdata]
                }
                const res = await useUpdateUserResponse(user?._id, data)
                console.log(res);
                if (res.success)
                {
                    dispatch(useUpdateUser(data))
                    setAdd(false)
                } else {
                    toast.error("your session is expired please login agin")
                }
            }
        }
    }
  return (
      <div className="div w-full flex flex-col justify-center place-items-center">

          {add && <div className='flex gap-3 justify-between place-items-center w-full'>
              <input name='key' onChange={Addvalue} type="text" placeholder='Key' className='w-[30%] text-sm border focus:outline-none rounded-md p-3' />
              <input name='link' onChange={Addvalue} type="text" placeholder='Link' className='w-[70%] text-sm border focus:outline-none rounded-md p-3' />
          </div>}
          <div  className=" w-full flex gap-3 justify-center pt-4">
              <button onClick={add ? HandleSubmit : ChangeValue} className='text-sm text-white p-2 rounded-md bg-gold-shade '>{add ? "Save Link" : "+ Add Links"}</button>

              {add ? <button className='text-sm bg-dark-shade rounded-md p-2' onClick={ChangeValue}>Cencel</button> : ""}
          </div>
      </div>
  )
}
