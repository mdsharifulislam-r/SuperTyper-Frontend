import axios from 'axios'
import React, { useEffect } from 'react'

export default function UseAxios() {
    const instance = axios.create({
        baseURL: "http://localhost:3700",
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
