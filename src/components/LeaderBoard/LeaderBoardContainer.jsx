import React, { useEffect, useState } from 'react'
import FirstThree from './FirstThree/FirstThree'
import AllUserResult from './AllUserResult/AllUserResult'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserResult, setLoaderShow } from '../../Store/ProjectSlice'
import { current } from '@reduxjs/toolkit'

export default function LeaderBoardContainer() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUserResult())
  }, [])
  function GetMax(arr, type = "wpm") {
    const data = [...arr].sort((a, b) => {
      const bWpm = b?.avarage?.wpm;
      const aWpm = a?.avarage?.wpm;

      return bWpm - aWpm;
    })

    return data;
  }
  dispatch(setLoaderShow(true))
  const userResultData = useSelector(state => state.usersResult)
  if (userResultData.length) {
    dispatch(setLoaderShow(false))
  }
  const data = GetMax(userResultData)

  return (
    <div className='w-full text-color-bg pb-7 overflow-x-hidden'>
      <div className="container">
        <div className="title flex justify-center mt-8">
          <h1 className='text-5xl font-bold text-color-gold stroke-white '>Leaderboard</h1>
        </div>
        <FirstThree arr={data.slice(0,3)} />
        <AllUserResult arr={data?.slice(3,data.length)} />
      </div>
    </div>
  )
}
