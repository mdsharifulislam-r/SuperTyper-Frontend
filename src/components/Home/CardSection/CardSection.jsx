import React from 'react'
import CardContainer from './CardContainer/CardContainer'

export default function CardSection() {
    return (
        <div>
            <svg className='bg-dark-shade' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242730" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,176C320,171,400,117,480,85.3C560,53,640,43,720,42.7C800,43,880,53,960,69.3C1040,85,1120,107,1200,106.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className='w-full py-6 pb-40 -mt-5  bg-dark-color'>
          <div className="container">
                    <div className="text-box flex  justify-center flex-col place-items-center">
                        <h1 className='text-white lg:text-6xl md:text-5xl text-3xl font-bold'>How its Work?</h1>
                        <p className='text-slate-200 pt-2'>chess your daily speed . Build up your own <br /> skill using my website daily result.</p>
                    </div>
                    <CardContainer/>
      </div>
            </div>
        </div>
  )
}
