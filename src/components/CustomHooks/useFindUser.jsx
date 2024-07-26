import React from 'react'
import UseAxios from './UseAxios'

export default async function useFindUser(id) {
    const instence = UseAxios()
    const res = await instence.get(`/api/user/${id}`)
    if (res.data.success) {
        return await res.data.user
    }
    
}
