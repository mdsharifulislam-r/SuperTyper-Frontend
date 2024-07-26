import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTime, makeWpm, ResetTester, StopEvery } from '../../Store/ProjectSlice'
import { motion } from 'framer-motion'

import SecondsToShow from 'seconds-to-show';
function Time({ start, stop }) {
    const mode = useSelector(state => state.mode)

    const timeinSecond = mode?.time * 60
    const ref = useRef(0)

    const dispatch = useDispatch()
    const [second, setSecond] = useState(timeinSecond)
    useEffect(() => {
        setSecond(timeinSecond)
    }, [mode])
    const [water, setWater] = useState(100)
    const reset = useSelector(state => state.reset)
    function Now() {
        return ref.current && Math.floor((Date.now() - ref.current) / 1000)
    }
    if (start == true) {
        if (ref.current == 0) {
            ref.current = Date.now()
        }

        const timer = setTimeout(() => {
            setWater(prev => {
                if (prev !== 0) {
                    return prev - (water / second)
                }
                else {
                    return 100
                }
            })

            setSecond(prev => {
                if (timeinSecond - Now() !== 0) {
                    return timeinSecond - Now()
                }
                else {
                    clearTimeout(timer)
                    ref.current = 0
                    dispatch(StopEvery(true))
                    return timeinSecond
                }
            })

        }, 1000)
    }

    useEffect(() => {
        if (reset) {
            ref.current = 0
            setWater(100)
            setSecond(timeinSecond)
            dispatch(ResetTester(false))

        }
    }, [reset])

    function ChangeMinitAndSecond(time) {
        return time <= 60 ? time : SecondsToShow(time)
    }
    return (<div>
        <div className='top-10 relative overflow-hidden z-10 text-5xl text text-slate-500 px-24 py-7 rounded-xl mb-16 bg-white'>
            <motion.div initial={{ height: 100 }} animate={{ height: water }} className={`absolute bottom-0 -z-10 left-0 w-full  bg-gold-shade`}></motion.div>
            <span className='z-20 text-color'>{ChangeMinitAndSecond(second)}</span>
        </div>
    </div>
    )
}

export default memo(Time)