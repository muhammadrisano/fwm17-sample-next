

const urlApi = 'https://jsonplaceholder.typicode.com/'

export const getPost =async()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(async()=>{
      const response = await fetch(`${urlApi}/posts`, {
        headers:{
          "Content-Type": "application/json"
        },
        cache: 'no-store'
        //  next: { revalidate: 60 }
      })
    
      const data = await response.json()
      resolve(data)
    }, 8000)
  })
  
  
}