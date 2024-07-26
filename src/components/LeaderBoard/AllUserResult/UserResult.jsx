import React from 'react'
import Item from '../FirstThree/Item'
import SmallItem from './SmallItem'
import image from "../../../assets/Profile/image.png"
import { useNavigate } from 'react-router-dom'
export default function UserResult({ data, index }) {
    
    const navigate = useNavigate()
    function OnClick() {
        navigate(`/profile/${data?.userId}`)
    }
  return (
      <div onClick={OnClick} data-aos="fade-up" className='w-full flex lg:justify-between px-3 py-2 place-items-center card-bg rounded-md' >
          <div className='flex  place-items-center pr-2 lg:w-[20%]  w-[36%] gap-3'>
              <div className="index lg:text-5xl md:text-3xl text-2xl text-white">
                  {index+1 ||0}
              </div>
              <div className='flex gap-1'>
                  <div className="image relative min-w-[70px]">
                      <img src={data?.userImage?data?.userImage:image} alt="" className='w-[70px] h-[70px] object-cover rounded-full bg-gold-shade' />
                  </div>
                
              </div>
          </div>
          <div className='flex lg:w-full lg:justify-between lg:flex-row gap-2 md:flex-row flex-col'>
              <div className="text w-full">
                  <h1 className='lg:text-xl font-semibold text-white'>{data?.userName}</h1>
                  <p className='text-color-gold font-medium'>{data?.title}</p>
              </div>
          
          <div className="cont flex  w-[100%] lg:w-1/2 md:w-1/2 gap-2 justify-around">
    
              <SmallItem
                  amount={data.avarage.wpm}
                  type={"WPM"}
              />
              <SmallItem
                  amount={data?.avarage?.acc}
                  key={data?.avarage?.acc}
                  type={"Accuricy"}
              />
              <SmallItem
                  amount={data?.avarage?.cpm}
                  type={"CPM"}
              />
              </div>
          </div>
          

    </div>
  )
}
