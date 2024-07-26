import React from 'react'
import heroImage from "./../../../assets/images/hero-section.png"
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import TypingEffectBox from '../../TypingEffectBox'
export default function HeroSection() {
  const navigate= useNavigate()
  return (
    <div className='w-full py-11 flex justify-center place-items-center bg-dark-shade'>
      <div className="container mx-auto flex flex-col lg:flex-row md:flex-row justify-between place-items-center">
        <div className="text-box lg:w-[70%] md:w-[80%] w-full text-color">

          <h1 className=' lg:text-5xl text-5xl font-bold md:text-3xl'><TypingEffectBox text={"Test Your Typing Speed"}/></h1>
          <p className='lg:text-3xl py-5 md:text-xl'>Grow up your typing speed using our website and be a Super Typer</p>
          <div className="button flex gap-8">
            <button className='py-2 px-10 bg-gold-shade rounded-md text-sm font-bold flex place-items-center gap-4 group transition duration-300 lg:text-xl' onClick={()=>navigate("/typing-box")}>Take a One menutes Test</button>
            
          </div>


        </div>
        <div className="img-box" data-aos="fade-left">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  )
}
