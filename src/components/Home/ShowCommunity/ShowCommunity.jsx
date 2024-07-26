import React from 'react'
import image from "./../../../assets/images/show-community.png"
import TypingEffectBox from '../../TypingEffectBox'
import { Link } from 'react-router-dom'
export default function ShowCommunity() {
  return (
    <div className='w-full py-9 flex justify-center place-items-center bg-dark-shade'>
          <div className="container flex flex-col lg:flex-row md:flex-row justify-between place-items-center">
              <div className="text-box text-color lg:w-1/2 md:w-1/2">
          <h1 className='lg:text-[5rem] md:text-[4rem] text-5xl font-bold leading-[1.3]'><TypingEffectBox text={"Join our community!"}/></h1>
                  <p className='text-xl'>Join our community to build up your skills. <br /> Intarect with every people and grow up yourself</p>
                  <div className="btn mt-8">
                      <Link className='px-5 py-3 bg-gold-shade text-color rounded-md font-bold'>Join Community</Link>
                  </div>
              </div>
        <div className="img-box" data-aos="zoom-out-left">
                  <img src={image} alt="" />
              </div>
      </div>
    </div>
  )
}
