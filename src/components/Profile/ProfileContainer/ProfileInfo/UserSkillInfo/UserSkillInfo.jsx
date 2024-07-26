import React, { useEffect } from 'react'
import Skill from './Skill'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserSkill } from '../../../../../Store/ProjectSlice'
import getAvarage from '../../../../Helper/getAvarage'

export default function UserSkillInfo() {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    useEffect(() => {
        dispatch(GetUserSkill(user?._id))
     },[user])
    const userSkill = useSelector(state => state.userSkill)
 

    const data =getAvarage(userSkill?.daily)
 
  return (
      <div className='grid bg-white rounded-lg justify-center place-items-center grid-cols-2 gap-3 p-6'>
          <Skill amount={data.wpm ||0} type={"Word Per Menutes"}/>
          <Skill amount={data.cpm || 0} type={"Character Per minutes"} />
          <Skill amount={data.acc ||0} type={"Accurracy"} />
          <Skill amount={0} type={"Compitation"} />
    </div>
  )
}
