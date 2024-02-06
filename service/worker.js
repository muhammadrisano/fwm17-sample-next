const urlApi = 'http://localhost:4000'
import {cookies} from 'next/headers';
import { headers } from 'next/headers';
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? '';
}

export const getDataWorkers = async()=>{
  const token = await getCookie('token');
  console.log(token);
  const response = await fetch(`https://fwm17-be-peword.vercel.app/v1/workers`, {
    headers:{
      "Content-Type": "application/json",
      ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
    },
    credentials: 'include',
    // cache: 'no-store'
    //  next: { revalidate: 60 }
  })

  const data = await response.json()
  return data
}


export const profileWorker = async()=>{
// 
}