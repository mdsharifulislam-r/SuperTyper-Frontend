import React from 'react'

export default function InputElement(props) {
  return (
    <div className='w-full'>
          <input className='px-3 w-full text-sm py-2 border focus:outline-none rounded-md' {...props}  />
          <div className="validate-masage text-[10px] px-2 text-red-400">
              {props?.massage?"field is required":""}
          </div>
    </div>
  )
}
