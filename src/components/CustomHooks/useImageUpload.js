import axios from 'axios';
import React from 'react'

export default async function useImageUpload(image) {
    const formdata = new FormData()
  formdata.append("image", image);
  const res = await axios.post(
    "https://api.imgbb.com/1/upload?key=0a65b02b2105b491f95b4d979a728aa4",
    formdata
  );

 return res.data.data
}
