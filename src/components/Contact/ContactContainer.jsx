import React from 'react'
import image from "../../assets/images/laptop.png"
export default function ContactContainer() {
  return (
    <div className='w-full bg-dark-shade  flex  pt-10 justify-center place-items-center px-3'>
      <div className="container   flex flex-col lg:flex-row md:flex-row gap-3 rounded-md shadow-md bg-white">
              <div className="imageBox w-full flex  flex-col justify-end ">
                  <img src={image} alt="" />
              </div>
              <div className="form w-full">
          <div className="header text-3xl font-semibold text-color-gold">
            Contact Us
          </div>
          <div className="inpu flex flex-col gap-3 w-full py-4 ">
            
            <input type="email" className=' px-3 py-2 lg:w-[90%] rounded-md border md:w-[90%] w-full focus:outline-none ' placeholder='Email Address' />
            <input type="text" className=' px-3 py-2 lg:w-[90%] rounded-md border md:w-[90%] w-full focus:outline-none ' placeholder='Phone Number' />
            <textarea className=' px-3 py-2 lg:w-[90%] rounded-md border md:w-[90%] min-h-[200px] w-full focus:outline-none ' placeholder='Your Massage' ></textarea>
            <div>
              <button className='button px-6 py-3 bg-gold-shade rounded-md'>Submit</button>
            </div>
          </div>
              </div>
      </div>
    </div>
  )
}
