import React from 'react'
const getProfile = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // resolve('done!!')
      reject('error bro...')
    }, 3000)
  })
}

const ProfilePage = async() => {
  const result = await getProfile()
  return (
    <div className='h-screen'>
      <h1>halaman Profile</h1>
    </div>
  )
}

export default ProfilePage