"use client"
import React, { useState } from 'react'

const LandingPage = () => {
  const [selectImage, setSelectImage] = useState(null)
  const handleUpload = (e)=>{
    const file = e.target.files[0]
    setSelectImage(file)

  }
  return (
    <div>
      <h1>halaman landing</h1>
      <input type="file" onChange={handleUpload} />
      {selectImage && <img src={URL.createObjectURL(selectImage)}/> } 
    </div>
  )
}

export default LandingPage