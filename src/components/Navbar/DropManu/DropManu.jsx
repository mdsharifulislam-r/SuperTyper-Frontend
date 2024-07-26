import React from 'react'
import MyDropDown from '../MyDropDown/MyDropDown'
import { Link } from 'react-router-dom'

export default function DropManu() {
  return (
      <div className="nav-links flex flex-col lg:flex-row md:flex-row justify-between gap-8 lg:place-items-center md:place-items-center py-3">
          <MyDropDown name={"Products"}
              links={[
                  {
                      label: "Test Speed",
                      link:"/typing-box"
                  },
                  {
                      label: "Typing Course"
                  }
              ]}
          />
          <Link>Community</Link>
          <Link to={"/leaderboard"}>Leader Board</Link>
          <MyDropDown
              name={"Policy"}
              links={[
                  {
                      label: "Contact Us",
                      link: "/contact"
                  },
                  {
                      label: "Feedback",
                      link: "/feedback"
                  }
              ]}
          />
      </div>
  )
}
