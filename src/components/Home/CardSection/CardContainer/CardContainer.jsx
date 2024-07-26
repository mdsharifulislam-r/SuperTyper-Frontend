import React from 'react'
import Card from './Card/Card'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaRegKeyboard } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
export default function CardContainer() {
    const cardData = [
        {
            icon: <BsGraphUpArrow />,
            title: "Step by Step",
            desc:"chess your daily speed . Build up your own skill using my website daily result."

        },
        {
            icon: <FaRegKeyboard/>,
            title: "Find WPM",
            desc: "chess your daily speed . Build up your own skill using my website daily result."

        },
        {
            icon: <FaAccessibleIcon />,
            title: "Find Accuracy",
            desc: "chess your daily speed . Build up your own skill using my website daily result."

        },
    ]
    const cardElement = cardData.map(data=>{
        return <Card
            icon={data.icon}
            title={data.title}
            desc={data.desc}
        />
    })
  return (
    <div className='flex flex-col lg:flex-row md:flex-row justify-between place-items-center mt-7 gap-5'>
         {cardElement}
    </div>
  )
}
