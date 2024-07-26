import React from 'react'

export default function Item({amount,type}) {
  return (
    
          <div className='flex flex-col text-white justify-center place-items-center'>
              <div className='lg:text-4xl md:text-2xl text-[10px]'>
                  {amount||0}
              </div>
              <div className='text-[7px] lg:text-base'>
                  {type}
              </div>
          </div>
  )
}
