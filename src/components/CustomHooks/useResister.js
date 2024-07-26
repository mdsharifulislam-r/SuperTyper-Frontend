import axios from 'axios';
import React from 'react'
import ToastMassage from '../Helper/ToastMassage';
import UseAxios from './UseAxios';


/**
 * 
 * @param {Object} obj 
 */
export default async function useResister(obj) {
    const instance = UseAxios()
    const data = await instance.post(
        "/api/user/create",
        obj
    );
    if (data.data.success) {
        await instance.post("/api/skill/create", data.data.id)
        .then(data=>console.log(data.data))
    }
    console.log(data.data);
    ToastMassage(data.data)
    return data.data

}
