import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowDropDown } from "react-icons/md";
export default function MyDropDown({ name, links }) {
    const array = links?.map(data => {
        return <Link className='hover:bg-dark-shade p-2 w-full text-center' to={data.link?data.link:""}>{data.label }</Link>
                 
    })
  return (
    <div>
          <div className='relative group z-20'>
              <Link className='p-2 hover:bg-dark-shade flex place-items-center gap-1'>{name?name:""} <span><MdArrowDropDown/></span> </Link>
              <div className="side-links lg:shadow md:shadow lg:absolute md:absolute transition-all duration-500 place-items-start  py-2 bg-white rounded-md hidden group-hover:flex flex-col lg:place-items-center md:place-items-center text-[13px] gap-2 w-[calc(100%+20px)]">
                  {array}
              </div>
          </div>
          
    </div>
  )
}
