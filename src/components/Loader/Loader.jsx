import React, { useState } from 'react'
import {Hourglass } from "react-loader-spinner"
import { useSelector } from 'react-redux'
export default function Loader() {
    const isShow = useSelector(state=>state.showLoader)
  return (
      <div className={`fixed w-full z-[500] h-screen ${isShow?"flex":"hidden"} justify-center place-items-center`}>
          <div className="div p-10 backdrop-blur-lg rounded-md shadow bg-white">
              <Hourglass
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={['#306cce', '#72a1ed']}
              />
      </div>
    </div>
  )
}
