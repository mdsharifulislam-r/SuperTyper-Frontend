import React from 'react'
import { auth, provider } from '../../Firebase/Firebase'
import { signInWithPopup } from 'firebase/auth'


import useResister from '../../CustomHooks/useResister'
import useLogin from '../../CustomHooks/UseLogin'
import { FaGithub } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useLoginSupport from '../../CustomHooks/UseLogin'
import { setLoaderShow } from '../../../Store/ProjectSlice'

export default function GitHubLogin({isLogin}) {
    const disppatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    async function Github() {
      disppatch(setLoaderShow(true))
      await signInWithPopup(auth, provider)
            .then(async result => {
                if (!isLogin) {
                  
                  const data= await useResister({
                        name: result.user?.displayName,
                        email: result.user.email,
                        image: result.user.photoURL,
                        isSocial: true,
                        type: "github"
                  })
                    if (data)
                    {
                        disppatch(setLoaderShow(false))
                    }
                } else {
                    const data = await useLoginSupport({
                        isSocial: true,
                        type: "github",
                        email: result.user.email,
                    })
                    if (data) {
                        disppatch(setLoaderShow(false))
                    }
                    disppatch(useLogin(data))

                    if (data) {
                        navigate("/")
                    }
                }
            })
            .catch(err => console.log(err))
    }

    return <FaGithub onClick={Github} />
}
