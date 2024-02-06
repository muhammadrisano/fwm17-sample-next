"use client"

import Button from '@/components/base/Button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const handleLogin = ()=>{
    // login
    // router.push('/main')
    // fetch('http://localhost:4000/v1/auth/login', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // })
    // .then(async(res)=>{
    //   if(!res.ok){
    //    const result =  await res.json()
    //     throw result.message
    //   } 
    //   return res.json()
    // })
    // .then((res)=>{
    //   router.push('/main/home')
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
    axios.post('/v1/auth/login', {
      email, password
    }, {
      withCredentials: true
    })
    .then(()=>{
      router.push('/main/home')
    })
  }

  return (
    <div>
      <ul>
        <li>
          <input type="text" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        </li>
        <li>
          <input type="passoword" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        </li>
      </ul>
      <Button onClick={handleLogin} title="login"/>
    </div>
  )
}

export default LoginPage