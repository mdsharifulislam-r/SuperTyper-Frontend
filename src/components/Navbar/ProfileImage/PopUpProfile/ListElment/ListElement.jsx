import React from 'react'
import { Link } from 'react-router-dom'

export default function ListElement({ title, links }) {
    const linksData = links?.map(item => {
        return <Link onClick={item?.func} to={item?.link} className='text-sm font-light'>{item?.text }</Link>
    })
  return (
    <div>
          <div className="tile font font-semibold text-color text-lg">
              {title}
          </div>
          <div className="list  pl-2 flex flex-col gap-2 pt-2">
            {linksData}
          </div>
    </div>
  )
}
