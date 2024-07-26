import React from 'react'
import MiniLoader from './MiniLoader'

export default function MyButton(props) {
    
  return (
    <div {...props}>
      {props.loading?<MiniLoader/>:props.children}
    </div>
  )
}
