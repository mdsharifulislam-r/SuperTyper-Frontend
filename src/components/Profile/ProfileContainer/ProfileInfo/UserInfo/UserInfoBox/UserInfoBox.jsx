import React from 'react'

export default function UserInfoBox(props) {
  return (
    <div className='flex place-items-center gap-3 border-b'>
          <div className='w-[20%]'>{props?.title }</div>
          <div className='w-[70%]'>
              <input disabled={props?.isUser?false:true} className='w-full bg-white p-3' {...props} value={props?.value} />
          </div>
    </div>
  )
}
