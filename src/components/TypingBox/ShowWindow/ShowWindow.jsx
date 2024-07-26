import React, { useEffect, useState } from 'react'
import looserImage from "./../../../assets/ResultWindow/looser.png"
import MediumImage from "./../../../assets/ResultWindow/medium.png"
import ProImage from "./../../../assets/ResultWindow/pro.png"

import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ResetTester, StopEvery } from '../../../Store/ProjectSlice'
import axios from 'axios'
import UseAxios from '../../CustomHooks/UseAxios'
import { toast } from 'react-toastify'

export default function ShowWindow({ mistack, paralength, type }) {
    const temp = useSelector(state => state.details)
    const user = useSelector(state => state.user)
    const [wpm, setWpm] = useState(temp)
    const instance = UseAxios()
    const navigate = useNavigate()

    const isShow = useSelector(state => state.stopEvery)

    const dispatch = useDispatch()

    const low = {
        title: "You are too slow!",
        image: looserImage,
        desc: ` But your performance is not Bad.You type with the speed of ${wpm.wpm} WPM (${wpm.cpm} CPM). Your accuracy was ${wpm.acc}%. It could be better!`
    }
    const medium = {
        title: "You are a Good Typer!",
        image: MediumImage,
        desc: ` Your typing speed is medium.You type with the speed of ${wpm.wpm} WPM (${wpm.cpm} CPM). Your accuracy was ${wpm.acc}%. You Shoud Practice More and More!`
    }
    const pro = {
        title: "You are a Pro !!",
        image: ProImage,
        desc: ` Your Typing so fast and accurate.You type with the speed of ${wpm.wpm} WPM (${wpm.cpm}CPM). Your accuracy was ${wpm.acc}%. Keep it up!`
    }
    useEffect(() => {

        setWpm(temp)

    }, [temp])

    const [Data, setData] = useState(low)
    const [show, SetShow] = useState(true)
    useEffect(() => {
        if (wpm) {
            setData(prev => {
                if (wpm.wpm < 20) {
                    return low
                }
                else if (wpm.wpm >= 20 && temp.wpm <= 35) {
                    return medium
                }
                else return pro
            })
        }
    }, [wpm])

    function Cencel() {

        SetShow(false)
        dispatch(StopEvery(false))
    }
    function TryAgin() {
        Cencel()
        SetShow(true)
        dispatch(ResetTester(true))

    }
    function Save() {
        
        if (user._id) {
            instance.post(`/api/skill/create`, {
                userId: user?._id,
                daily: [wpm]
            })
                .then(data => console.log(data.data))
        } else {
            toast.error("To save your progress please login")
        }
        TryAgin()
    }
    
    return (
        <div className={`w-full z-10 fixed top-0  left-0 ${isShow ? "flex" : "hidden"} ${show ? "flex" : "hidden"} justify-center place-items-center h-screen bg-[rgba(0,0,0,0.3)]`}>

            <div className="container flex justify-center place-items-center ">
                <div className=" relative bg-white pointer-events-auto w-[70%] p-3 rounded-lg z-[500] " >
                    <button className="c absolute top-5 right-9 cursor-pointer text-color  text-2xl" onClick={Cencel}>X</button>
                    <div className="result w-full flex justify-center  px-6 py-5">
                        <div className="imgbox">
                            <img src={Data?.image} alt="" className='h-[100%]' />
                        </div>
                        <div className="text-box">
                            <div className="title text-3xl font-bold text-color-gold py-3">{Data?.title}</div>
                            <div className="desc">
                                {Data?.desc}
                            </div>
                            <div className="social mt-8">
                                <h1>Share on</h1>
                                <div className="icons flex gap-4 place-items-center text-3xl mt-3">
                                    <Link><FaInstagram /></Link>
                                    <Link><FaFacebook /></Link>
                                    <Link><FaTwitter /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button w-full p-6 flex flex-col place-items-center justify-center">
                        <div className="text-sm text-color font-bold">
                            Your will submited on your daliy proggress

                        </div>
                        <div className="button mt-6">
                            <button className='px-3 py-2 text-sm  bg-white border  rounded-md ' onClick={TryAgin}>Try Agin</button> or <button onClick={Save} className='px-3 py-2 text-sm font-bold bg-gold-shade rounded-md text-white'>Save</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>)
}
