import React from 'react'

export default function SmallItem({amount,type}) {
  return (
    <div className='flex justify-center  place-items-center'>
      <div className='lg:text-3xl text-sm text-white'>{amount||0}</div>
      <div className='text-color-gold text-sm'>{type }</div>
    </div>
  )
}
