import React from 'react'
import FooterLinks from './FooterLinks/FooterLinks'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    const socialLink = [
        {
            icon:<FaFacebook/>,
        },
        {
            icon:<FaInstagram/>
        },
        {
            icon: <FaTwitter/>,
        },
        {
            icon: <FaGithub />
        },
        
        
        
    ]
    const socialElement = socialLink.map((data,index) => {
        return <Link key={index}>{data.icon }</Link>
    })
  return (
    <div className='w-full py-11 bg-dark-shade'>
          <div className="container  ">
              <FooterLinks /> 
              <div className='flex justify-between place-items-center py-16  '> 
                  <div className='flex place-items-center gap-3'>
                      <h1>Create a new account </h1>
                      <button className='px-2 py-1 rounded-md bg-red text-sm text-white font-bold'>Resiter Now</button>
                  </div>
                  <div className='flex justify-between place-content-center gap-4 text-xl'>
                      {socialElement}
                  </div>
              </div>

          </div>
          <hr className=' h-1 bg-dark-color' />
          <div className=' py-2 flex justify-center place-items-center'>
              ©Copyright to MD Shariful Islam 
          </div>
    </div>
  )
}
