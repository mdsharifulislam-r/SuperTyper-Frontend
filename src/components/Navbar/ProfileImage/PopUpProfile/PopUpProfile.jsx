import React, { memo } from 'react'
import MiniProfile from './MiniProfile/MiniProfile'
import ListElement from './ListElment/ListElement'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../../../../Store/ProjectSlice'
import { useNavigate } from 'react-router-dom'
import UseAxios from '../../../CustomHooks/UseAxios'

function PopUpProfile({ show,Callback}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state=>state.user)
 async function Logout()
  {
   const instance = UseAxios()
   const data = await instance.post("/api/user/logout")
   if (data.data.success) {
     dispatch(LogOut())
     Callback()
     navigate("/")
   }
   
 
  }
  return (
    <div className={`py-5 ${show?"block":"hidden"} z-50   rounded-lg px-8 bg-white shadow-xl absolute top-10 right-1`}>
      <MiniProfile />
      <div className="list pt-6 flex flex-col gap-5">
        <ListElement title={"Account"} links={[
          {
            text: "View Profile",
            link: `/profile/${user?._id}`,
            func:Callback
            
          },
          {
            text: "Setting and Privecy",
            func: Callback

          },
          {
            text: "Leaderboard",
            link:"/leaderboard",
            func: Callback
          }
        ]} />
        <ListElement
          title={"Manage"}
          links={[
            {
              text: "Contact Us",
              func: Callback,
              link:"/contact"
            },
            {
              text: "Help and Feedback",
              func: Callback
            },
            {
              text: "Help Center",
              func: Callback
            }

          ]}
        
        />
      </div>
      <div className="div py-2 pt-5">
        <button className='px-6 py-1 text-sm bg-gold-shade text-color' onClick={Logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default memo(PopUpProfile)