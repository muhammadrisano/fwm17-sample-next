const url = process.env.NEXT_PUBLIC_API_URL

export const login = async(form)=>{
  try {
    const response = await fetch(`/v1/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify(form),
      credentials: "include"
    })
    if (!response.ok) {
      throw('tidak oke')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
   return Promise.reject('ada error')
  }
  

}