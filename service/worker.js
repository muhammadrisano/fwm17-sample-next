const urlApi = 'http://localhost:4000'


export const getDataWorkers = async()=>{
  const response = await fetch(`${urlApi}/v1/workers`, {
    headers:{
      "Content-Type": "application/json"
    },
    cache: 'no-store'
    //  next: { revalidate: 60 }
  })

  const data = await response.json()
  return data
}


export const profileWorker = async()=>{
// 
}