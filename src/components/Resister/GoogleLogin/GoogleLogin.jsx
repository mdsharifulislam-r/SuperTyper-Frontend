import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"

import useResister from '../../CustomHooks/useResister';
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderShow, useLogin } from '../../../Store/ProjectSlice';
import { useNavigate } from 'react-router-dom';
import useLoginSupport from '../../CustomHooks/UseLogin';

export default  function  Googlelogin({ isLogin }) {
    const navigate = useNavigate()
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    return <GoogleLogin
        onSuccess={async (credentialResponse) => {
            dispatch(setLoaderShow(true))
            const data = jwtDecode(credentialResponse.credential)
            if (!isLogin) {
               const data2 = await useResister({
                    name: data?.name,
                    email: data?.email,
                    image: data?.picture,
                    isSocial: true,
                    type: "gmail"
               })
                if (data2) {
                    dispatch(setLoaderShow(false))
                }
            } else {
            
                const data1 =await useLoginSupport({
                    isSocial: true,
                    type: "gmail",
                    email: data?.email,
                })
                if (data1) {
                    dispatch(setLoaderShow(false))
                }
               dispatch(useLogin(data1))
                if (user) {
                    navigate("/")
                }
            }
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
}
