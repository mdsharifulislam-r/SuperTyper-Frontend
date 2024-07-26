import React from 'react'
import UseAxios from './UseAxios';
import ToastMassage from '../Helper/ToastMassage';
import axios from 'axios';
import { toast } from 'react-toastify';

export default async function useUpdateUserResponse(id,body) {
   const instance = UseAxios()
  const data = await instance.put(`/api/user/update/${id}`, body, {
      withCredentials:true
  });
  console.log(data);
  // if (data.data.type = "session") {
  //   toast.error("Your session is expired please login")
  // }
   
  return data.data
}
