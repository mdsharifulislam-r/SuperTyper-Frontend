import React from 'react'
import { Hourglass } from 'react-loader-spinner'

export default function MiniLoader() {
    return (
      <div className=' mt-2'>
            <Hourglass
                visible={true}
                height="20"
                width="20"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />   
      </div>
       
    
  )
}
