import React from 'react'
import image from "./../../../assets/images/laptop.png"
export default function ShowContact() {
  return (
    <div>
          <div className='w-full overflow-hidden  py-36 flex justify-center place-items-center bg-gold-shade'>
              <div className="container flex flex-col lg:flex-row md:flex-row relative lg:place-items-center">
                  <div className="text-box text-color lg:w-[50%] z-10">
                      <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold leading-[1.3]'>For any Help Contact Us!</h1>
                      <p className='text-xl text-white'>participent in compitaion , and win price. we <br /> organaize compitaion in every 30 days.</p>
                      <div className="btn mt-8 flex gap-4">
                          <input type="email" name="" id="" placeholder='Email Address' className='px-7 rounded-md py-3 focus:outline-none' />
                          <button className='px-5 py-3 bg-red text-white rounded-md font-bold'>Subscibe</button>
                      </div>
                  </div>
                  <div className="img-box absolute right-0 bottom-0">
                      <img className=' scale-150 translate-y-14' src={image} alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}
