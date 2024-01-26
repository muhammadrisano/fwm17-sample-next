"use client"

import Button from '@/components/base/Button'
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

  const router = useRouter()
  const handleLogin = ()=>{
    // login
    router.push('/main')
  }

  return (
    <div>
      <ul>
        <li>
          <input type="text" placeholder='email' />
        </li>
        <li>
          <input type="passoword" placeholder='password' />
        </li>
      </ul>
      <Button onClick={handleLogin} title="login"/>
    </div>
  )
}

export default LoginPage