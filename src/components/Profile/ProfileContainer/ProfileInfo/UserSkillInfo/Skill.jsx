import React from 'react'

export default function Skill({amount,type}) {
  return (
    <div className='gap-3 p-6 shadow-md border rounded-md flex flex-col lg:flex-row md:flex-row place-items-center w-full'>
          <h1 className='text-5xl font-bold text-color-gold'>
              {amount}
          </h1>
          <p className='lg:text-sm text-[10px] '>Avarage {type}</p>
    </div>
  )
}
