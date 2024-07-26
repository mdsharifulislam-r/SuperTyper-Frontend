import React, { memo, useEffect } from 'react'
import HeroSection from '../../components/Home/HeroSectilon/HeroSection'
import LeaderShowSection from '../../components/Home/LeaderSection/LeaderShowSection'
import ShowCommunity from '../../components/Home/ShowCommunity/ShowCommunity'
import FollowGrowth from '../../components/Home/FolllowGrowth/FollowGrowth'
import CardSection from '../../components/Home/CardSection/CardSection'
import ShowTornament from '../../components/Home/ShowTornament/ShowTornament'
import ShowContact from '../../components/Home/ShowContact/ShowContact'
import TypingBox from '../../components/TypingBox/TypingBox'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { GetUserResult, GetUserSkill } from '../../Store/ProjectSlice'


function Home() {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
 
  useEffect(() => {
    dispatch(GetUserResult())
   },[])
  return (
    <div className=' overflow-x-hidden'>
    
          <HeroSection />
          <LeaderShowSection />
          <ShowCommunity />
          <CardSection />
          <FollowGrowth />
          <ShowTornament />
          <ShowContact/>
    </div>
  )
}

export default memo(Home)
