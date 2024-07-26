import React from 'react'
import image from "./../../../assets/images/tornament.png"
import TypingEffectBox from '../../TypingEffectBox'
export default function ShowTornament() {
    return (
        <div className='w-full py-36 flex justify-center place-items-center bg-dark-shade'>
            <div className="container flex flex-col-reverse md:flex-row lg:flex-row justify-between lg:place-items-center">
                <div className="text-box text-color lg:w-[60%]">
                    <h1 className='lg:text-[5rem] md:text-3xl text-5xl font-bold lg:leading-[1.3]'><TypingEffectBox text={"Prove your yourself!"}/></h1>
                    <p className='text-xl'>participent in compitaion , and win price. we <br /> organaize compitaion in every 30 days.</p>
                    <div className="btn mt-8">
                        <button className='px-5 py-3 bg-gold-shade text-color rounded-md font-bold'>Join in Tonrament</button>
                    </div>
                </div>
                <div className="img-box" data-aos="zoom-out-left">
                    <img className=' lg:scale-150' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}