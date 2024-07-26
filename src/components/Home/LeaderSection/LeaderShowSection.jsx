import React from 'react'
import image from "./../../../assets/images/leader-show-section.png"
import TypingEffectBox from '../../TypingEffectBox'
import { Link } from 'react-router-dom'
export default function LeaderShowSection() {

  return (
    <div>
      <svg className='bg-dark-shade ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3C716" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,165.3C320,181,400,235,480,224C560,213,640,139,720,117.3C800,96,880,128,960,133.3C1040,139,1120,117,1200,122.7C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className='w-full py-16 bg-gold-shade -mt-3 flex justify-center place-items-center'>
      <div className="container flex-col md:flex-row lg:flex-row flex justify-between place-items-center">
        <div className="text-box lg:w-1/2 md:w-1/2">
          <h1 className='text-color lg:text-6xl md:text-5xl text-5xl font-bold leading-[1.3]'>
              <TypingEffectBox text={" Be a one of the fastest typer in the World!"}/>
          </h1>
          <div className="btn mt-5">
            <Link to={"/leaderboard"} className='px-6 font-bold py-3 bg-dark-shade text-color rounded-md'>Leader Board</Link>
          </div>
        </div>
          <div className="img-box" data-aos="zoom-out-left">
          <img src={image} alt="" />
        </div>

      </div>
      </div>
    </div>
  )
}
