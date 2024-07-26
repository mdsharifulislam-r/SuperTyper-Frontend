import React from 'react'
import { auth, provider } from '../../Firebase/Firebase'
import { signInWithPopup } from 'firebase/auth'


import useResister from '../../CustomHooks/useResister'

import { FaGithub } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useLoginSupport from '../../CustomHooks/UseLogin'
import { setLoaderShow, useLogin } from '../../../Store/ProjectSlice'

export default function GitHubLogin({isLogin}) {
    const disppatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    async function Github() {
      disppatch(setLoaderShow(true))
        const result = await signInWithPopup(auth, provider)
        console.log(result);
        if (!isLogin) {
            
            const data = await useResister({
                name: result.user.reloadUserInfo?.providerUserInfo[0]?.displayName,
                email: result.user.reloadUserInfo?.providerUserInfo[0]?.email,
                image: result.user.photoURL,
                isSocial: true,
                type: "github"
            })
            console.log(result.user.reloadUserInfo[0].providerUserInfo);
            if (data) {
                disppatch(setLoaderShow(false))
            }
        } else {
            console.log("click");
            const data =await useLoginSupport({
                isSocial: true,
                type: "github",
                email: result.user.reloadUserInfo.providerUserInfo[0].email,
            })
          
            if (data.success) {
               
                disppatch(useLogin(data.user))
                navigate("/")
            }
           

            if (data) {
                disppatch(setLoaderShow(false))
      
            }
        }
       
    }

    return <FaGithub onClick={Github} />
}
