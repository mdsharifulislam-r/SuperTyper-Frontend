import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink({ title, links }) {
    const linkElement = links?.map(link => {
        return <Link to={link.link?link.link:""}>{link.label }</Link>
    })
  return (
    <div className='text-color'>
          <h1 className='text-xl font-bold'>{ title}</h1>
          <div className="links flex flex-col gap-3 mt-6 text-sm">
              {linkElement}
          </div>
    </div>
  )
}
