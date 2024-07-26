import React from 'react'
import Item from './Item'
import image from "../../../assets/Profile/image.png"
import crown from "../../../assets/Cown/crown.png"
import { useNavigate } from 'react-router-dom'
export default function Stachue({ pos, data, number }) {
    const navigate = useNavigate();
    function Click()
    {
        navigate(`/profile/${data?.userId}`)
    }
  return (
      <div onClick={Click} className={`  cursor-pointer lg:px-12 w-[33%] lg:w-[300px]  relative ${pos ? "pb-10 lg:pb-20 shadow-2xl z-20" : "pb-4 lg:pb-10"}  flex justify-center place-items-center flex-col  card-bg rounded-lg rounded-tl-[50px] rounded-tr-[50px]`}>
          
          <div className="imagebox h-[30%] w-full justify-end place-items-center ">
              {pos &&<div className='absolute -top-20 w-full z-30 flex justify-center '>
                  <img src={crown} alt="" className='w-[100px] lg:-translate-x-12' />
              </div>}
              <div className='relative w-full flex justify-center -translate-y-[26px]'>
                  <img src={data?.userImage?data?.userImage:image} alt="" className='lg:w-[100px] md:w-[100px] md:h-[100px] lg:h-[100px] w-[60px] h-[60px] object-cover rounded-full border-[3px] border-white bg-gold-shade' />
                  <div className='absolute bottom-0 translate-y-3 px-3 rounded-full text-xl font-bold py-1 bg-white text-color-gold'>{number }</div>
              </div>

          </div>
          <div className="textBox px-12">
              <h1 className='lg:text-lg text-sm text-center font-bold text-white'>{data?.userName}</h1>
              <h1 className='lg:text-lg text-sm text-center font-bold text-color-gold'>{data?.title}</h1>
              <div className='flex  justify-center place-items-center pt-3 gap-2 lg:gap-3'>
                  <Item amount={data?.avarage?.wpm} type={"WPM"} />
                  <Item amount={data?.avarage?.acc||0 +"%"} type={"Accurecy"} />
                  <Item amount={data?.avarage?.cpm} type={"CPM"} />
              </div>
          </div>
      </div>
  )
}
