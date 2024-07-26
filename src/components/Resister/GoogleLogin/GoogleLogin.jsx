import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"

import useResister from '../../CustomHooks/useResister';
import { useDispatch, useSelector } from 'react-redux';
import { useLogin } from '../../../Store/ProjectSlice';
import { useNavigate } from 'react-router-dom';
import useLoginSupport from '../../CustomHooks/UseLogin';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleProvider } from '../../Firebase/Firebase';
import { FaGoogle } from 'react-icons/fa';

export default  function  Googlelogin({ isLogin }) {
    

    const auth = getAuth();
    function Click() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return <FaGoogle onClick={Click}/>
}







 // const navigate = useNavigate()
    // const user = useSelector(state=>state.user)
    // const dispatch = useDispatch()
    // return <GoogleLogin
    //     onSuccess={async (credentialResponse) => {
    //         const data = jwtDecode(credentialResponse.credential)
    //         if (!isLogin) {
    //             useResister({
    //                 name: data?.name,
    //                 email: data?.email,
    //                 image: data?.picture,
    //                 isSocial: true,
    //                 type: "gmail"
    //             })
    //         } else {
            
    //             const data1 =await useLoginSupport({
    //                 isSocial: true,
    //                 type: "gmail",
    //                 email: data?.email,
    //             })
    //            dispatch(useLogin(data1))
    //             if (user) {
    //                 navigate("/")
    //             }
    //         }
    //     }}
    //     onError={() => {
    //         console.log('Login Failed');
    //     }}
    // />