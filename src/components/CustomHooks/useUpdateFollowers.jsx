import React from 'react'
import UseAxios from './UseAxios'

export default async function useUpdateFollowers(id,body) {
    const instance = UseAxios()
    const res = instance.put(`/api/user/followers/${id}`, body)
    return (await res).data

}
