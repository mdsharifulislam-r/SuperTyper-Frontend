import axios from 'axios'
import React, { useEffect } from 'react'

export default function UseAxios() {
    const instance = axios.create({
      baseURL: "https://supertyper-backend.onrender.com",
      withCredentials: true,
        
    })
    // useEffect(() => {
    //     instance.interceptors.response.use(function (response) {
    //         return response;
    //     }, function (error) {
    //         return Promise.reject(error);
    //     });
    //  },[])
  return instance
}
