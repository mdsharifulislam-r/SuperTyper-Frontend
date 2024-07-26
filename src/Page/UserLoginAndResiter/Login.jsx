import React, { useState } from 'react';
;
import { Link, useNavigate } from 'react-router-dom';
import InputElement from '../../components/InputElement/InputElement';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import Googlelogin from '../../components/Resister/GoogleLogin/GoogleLogin';
import GitHubLogin from '../../components/Resister/GitHubLogin/GitHubLogin';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setLoaderShow, useLogin } from '../../Store/ProjectSlice';
import useLoginSupport from '../../components/CustomHooks/UseLogin';




export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
   
    email: "",
   
    pass: ""
  })
  function Addvalue(e) {
    const { name, value } = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const onSubmit =async e => {
    e.preventDefault()
    dispatch(setLoaderShow(true))
    const {email, pass } = formData
    if ( email && pass) {
  
   const User = await useLoginSupport({
        email,
        password: pass,
        isSocial:false
   })
    
 
        setFormData({
        
          email: "",
          pass: "",
       
        })
   console.log(User);
      if (User) {
        dispatch(setLoaderShow(false))
        dispatch(useLogin(User))
        navigate("/")
      }
      
    } else {
      toast.error("fill all data and try agin")
    }
  };


  return (
    <div className="form w-full py-16 bg-dark-shade flex justify-center place-items-center">
      <div className="container flex justify-center">
        <form onSubmit={onSubmit} className='flex bg-white rounded-md flex-col px-10 py-5 lg:w-[40%] md:w-[70%]  shadow gap-3'>

          <h1 className='text-center text-2xl text-color font-bold py-3'>Login</h1>
         
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
            name="pass"
            onChange={Addvalue}
            value={formData.pass}

          />
          <div className="button pt-4 flex justify-center">
            <input className=' cursor-pointer bg-gold-shade w-full py-2 rounded-md text-color text-sm font-bold ' type="submit" />
          </div>
          <div className='w-full flex justify-center place-items-center'>
            <span className='w-full h-1 bg-dark-shade'></span>OR<span className='w-full h-1 bg-dark-shade'></span>
          </div>
          <div className="social flex place-items-center justify-center gap-4 text-4xl text-color ">
            <div className=" cursor-pointer hover:text-color-gold" >
             <GitHubLogin isLogin={true}/>
            </div>
            <div className=" cursor-pointer hover:text-color-gold">
              <span className='absolute opacity-0'><Googlelogin isLogin={true} /></span>

              <FaGoogle />
            </div>
          </div>
          <div className="text pb-2">
            <p>If you have no account <Link to={"/resister"} className='text-color-gold'>Resister Now</Link> </p>
          </div>

        </form>
      </div>
    </div>
  );
}