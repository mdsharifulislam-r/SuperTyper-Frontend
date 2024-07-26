import React, { useState } from 'react';
;
import { Link, useNavigate } from 'react-router-dom';
import InputElement from '../../components/InputElement/InputElement';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import Googlelogin from '../../components/Resister/GoogleLogin/GoogleLogin';
import GitHubLogin from '../../components/Resister/GitHubLogin/GitHubLogin';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import useResister from '../../components/CustomHooks/useResister';
import { setLoaderShow } from '../../Store/ProjectSlice';

export default function Resister() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        pass1: "",
        pass2:""
    })
    function Addvalue(e) {
        const {name,value}=e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const onSubmit =async e => {
        
        e.preventDefault()
        const { name, email, pass1, pass2 } = formData
        if (name && email && pass1 && pass2) {
            if (pass1 == pass2) {
                if (pass1.length >= 8) {
                    dispatch(setLoaderShow(true))
                    const res = await useResister({
                        ...formData,
                        password: pass1,
                        isSocial: false
                    })
                    if (res.success) {
                        dispatch(setLoaderShow(false))
                        setFormData({
                            name: "",
                            email: "",
                            pass1: "",
                            pass2: ""
                        })
                        navigate("/login")
                    }
                } else {
                    toast.error("Password must be 8 charachter or more")
                }
            }
            else {
                toast.error("Password not match")
            }
        } else {
            toast.error("fill all data and try agin")
        }
    };
   

    return (
        <div className="form w-full py-16 bg-dark-shade flex justify-center place-items-center">
            <div className="container flex w-full justify-center">
                <form onSubmit={onSubmit} className='flex w-full bg-white rounded-md flex-col px-10 py-5 lg:w-[40%] md:w-[40%] shadow gap-3'>

                    <h1 className='text-center text-2xl text-color font-bold py-3'>Resiter Now</h1>
                    <InputElement
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        onChange={Addvalue}
                        value={formData.name}
                    
                    />
                    <InputElement
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={Addvalue}
                        value={formData.email}

                    />
                    <InputElement
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        onChange={Addvalue}
                        value={formData.pass1}

                    />
                    <InputElement
                        type="password"
                        placeholder="Confirmd Password"
                        name="pass2"
                        onChange={Addvalue}
                        value={formData.pass2}

                    />
                <div className="button pt-4 flex justify-center">
                    <input className=' cursor-pointer bg-gold-shade w-full py-2 rounded-md text-color text-sm font-bold ' type="submit" />
                    </div>
                    <div className='w-full flex justify-center place-items-center'>
                        <span className='w-full h-1 bg-dark-shade'></span>OR<span className='w-full h-1 bg-dark-shade'></span>
                    </div>
                    <div className="social flex place-items-center justify-center gap-4 text-4xl text-color ">
                        <div className=" cursor-pointer hover:text-color-gold" >
                            <GitHubLogin isLogin={false}/>
                        </div>
                        <div className=" cursor-pointer hover:text-color-gold">
                            <span className='absolute opacity-0'><Googlelogin /></span>
                            
                            <FaGoogle/>
                        </div>
                    </div>
                <div className="text pb-2">
                    <p>If you already have a account <Link to={"/login"} className='text-color-gold'>Login Now</Link> </p>
                </div>
            
                </form>
                </div>
        </div>
    );
}