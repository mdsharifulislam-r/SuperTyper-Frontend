import React from 'react'

import Item from './Item'
import Stachue from './Stachue'
export default function FirstThree({ arr }) {
    console.log(arr);
  return (
    <div className='w-full pt-40'>
          <div className="con w-full flex justify-center place-items-end  ">
              
              <Stachue number={2} data={arr[1]} />
              <Stachue number={1} pos={true} data={arr[0]} />
              <Stachue number={3} data={arr[2]}/>


     </div>
    </div>
  )
}
