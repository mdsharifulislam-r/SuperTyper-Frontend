import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
export default function Card({title,desc,icon}) {
  return (
    <div className='card-bg p-7 rounded-md hover:scale-105 transition duration-100'>
          <div className="icon text-4xl text-white">
              {icon}
          </div>
          <div className="card-header pt-4 text-white text-xl font-bold pb-4 ">
              {title}
          </div>
          <p className='text-white pb-7'>{desc}</p>
          <div className="btn">
              <button className='flex place-items-center gap-3 text-yellow-500'>Explore now <FaChevronRight/>  </button>
          </div>
    </div>
  )
}
