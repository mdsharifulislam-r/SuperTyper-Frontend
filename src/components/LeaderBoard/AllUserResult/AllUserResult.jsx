import React from 'react'
import UserResult from './UserResult'

export default function AllUserResult({ arr }) {
  const data = arr?.map((item,index) => {
    return <UserResult
      data={item}
      index={index+3}
      key={index+3}
      
    />
})
  return (
    <div className=' pt-40 flex justify-center flex-col place-items-center gap-6'>
          {data}
    </div>
  )
}
