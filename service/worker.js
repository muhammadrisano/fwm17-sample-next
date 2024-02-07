const url = process.env.NEXT_PUBLIC_API_URL
import {cookies} from 'next/headers';
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? '';
}

export const getWorkers = async()=>{
  try {
    const token = await getCookie('token')
    const response = await fetch(`${url}/v1/workers/`,{
      headers: {
        "Content-Type": "application/json",
        ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
      },
      credentials: "include",

    })
    const data = await response.json()
    return data
  } catch (error) {
    return Promise.reject('ada error bro...')
  }
  
}