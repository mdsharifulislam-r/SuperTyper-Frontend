import React, { useEffect, useState } from 'react'
import looserImage from "./../../../assets/ResultWindow/looser.png"
import MediumImage from "./../../../assets/ResultWindow/medium.png"
import ProImage from "./../../../assets/ResultWindow/pro.png"
import { IoMdDocument } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'
import { FaClock, FaFacebook, FaInstagram, FaPage4, FaPaperclip, FaTwitter } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ResetTester, SetMode, StopEvery } from '../../../Store/ProjectSlice'
import SelectComponet from './SelectComponet/SelectComponet'

export default function ChoseLevelandTime({ mistack, paralength, type }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        time: "1",
        test:"easy"
    })
    function AddValue(e) {
        const {name,value}=e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const isShow = useSelector(state => state.stopEvery)

    const [show, SetShow] = useState(true)
    function SubmitData() {

        dispatch(SetMode(formData))
        SetShow(false)
    }
   
    
    return (
        <div className={`w-full z-[100] fixed top-0  left-0 ${isShow ? "flex" : "flex"} ${show ? "flex" : "hidden"} justify-center place-items-center h-screen bg-[rgba(0,0,0,0.3)]`}>

            <div className="container flex justify-center place-items-center ">
                <div className=" relative bg-white pointer-events-auto  w-[70%] p-3 rounded-lg z-[500] " >
                    <button className="c absolute top-5 right-9 cursor-pointer text-color  text-2xl" >X</button>
                    <div className="result w-full flex justify-center place-items-center  px-6 py-5">
                        <div className="imgbox w-[30%]  justify-center place-items-center hidden lg:flex md:flex">
                            <img src={looserImage} alt="" className='' />
                        </div>
                        <div className="text-box">
                            <div className='w-full text-center'>
                                <h1 className='text-xl font-bold text-color '>Check your typing skills in a minute</h1>
                                <p className='text-sm py-5'>Type away to join 150+ million test takers!</p>
                            </div>
                            <form action="" className="form">
                                <SelectComponet
                                    name="time"
                                    onChange={AddValue}
                                    icon={<FaClock />}
                                    options={[
                                        {
                                            value: 1,
                                            title:"1 minute"
                                        },
                                        {
                                            value: 2,
                                            title: "2 minute"
                                        },
                                        {
                                            value: 5,
                                            title: "5 minute"
                                        },
                                        {
                                            value: 10,
                                            title: "10 minute"
                                        },
                                    ]}
                                />
                                <SelectComponet
                                    name="test"
                                    onChange={AddValue}
                                
                                    icon={<IoMdDocument />}
                                    options={[
                                        {
                                            value: "easy",
                                            title:"Easy Test"
                                        
                                        },
                                        {
                                            value: "normal",
                                            title:"Normal Test"
                                        
                                    },
                                        {
                                            value: "hard",
                                            title:"Hard Test"
                                        }
                                    ]}
                                />
                            </form>
                            <div className="button w-full  flex flex-col place-items-center justify-center">
                                
                                <div className="button">
                                    <button onClick={SubmitData} className='px-9 py-2 text-sm  border  rounded-md bg-gold-shade text-white ' >Lets Start</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>

        </div>)
}
