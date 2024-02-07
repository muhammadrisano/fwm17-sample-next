// import {cookies} from 'next/headers';

// const getCookie = async (name) => {
//   return cookies().get(name)?.value ?? '';
// }

// const componentType = typeof window === 'undefined' ? 'server' : 'client';

export const addSkill = async(val)=>{
  try {
    const response = await fetch('/v1/skills', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body:JSON.stringify({skill_name: val})
    })
    const data = response.json()
    return data
  } catch (error) {
    return Promise.reject(error.message || 'terjadi error!')    
  }
 

} 

export const getSkill = async()=>{
  try {
    console.log(componentType);
    let token = ''
    // if(componentType === 'server'){
    //   token = await getCookie('token')
    // }
    const response = await fetch(`${componentType === 'server' ? process.env.NEXT_PUBLIC_API_URL: ''}/v1/skills`,{
      headers: {
        "Content-Type": "application/json",
        // ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
      },
      credentials: "include",
    })
    const data = await response.json()
    return data
  } catch (error) {
    return Promise.reject('ada error bro...')
  }
}