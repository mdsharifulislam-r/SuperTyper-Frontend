import React from 'react'
import { FaClock } from 'react-icons/fa'

export default function SelectComponet({ icon, options,name,onChange }) {
    const optionArr = options?.map((data, index) => {
        return <option value={data?.value} key={index}>{data?.title }</option>
    })
  return (
    <div className='w-full my-3'>
          <div className="wraper w-full flex place-items-center shadow min-w-[300px]">
              <div className="icon p-4 text-color text-3xl ">
                  {icon}
              </div>
              <div className="select-menu w-full px-5">
                  <select name={name} id="" className='w-full focus:outline-none' onChange={onChange}>
                     {optionArr}
                  </select>
              </div>
      </div>
    </div>
  )
}
