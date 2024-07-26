import React from 'react'
import image from "./../../../assets/images/follow.png"
import TypingEffectBox from '../../TypingEffectBox'
import { Link } from 'react-router-dom'
export default function FollowGrowth() {
  return (
    <div className='w-full   text-color bg-dark-shade flex justify-center place-items-center'>
          <div className="container flex flex-col lg:flex-row md:flex-row justify-between gap-7  place-items-center">
              <div className="img-box" data-aos="zoom-out">
                  <img src={image} alt="" />
              </div>
              <div className="text-box lg:w-1/2">
          <div className='lg:text-6xl md:text-3xl text-5xl pb-3 font-bold'><TypingEffectBox text={"Follow your growth!"}/></div>
                  <p className='lg:text-xl'>chess your daily speed . Build up your own skill <br /> using my website daily result.</p>
                  <div className="btn mt-6">
                      <Link to="/resister" className='py-3 px-4 bg-gold-shade rounded-md font-bold '>Resister Now</Link>
                  </div>
              </div>
              
      </div>
    </div>
  )
}
