import { getDataWorkers } from "@/service/worker";
// import React, { Suspense, useEffect, useState } from "react";
// import useSWR from "swr";
// import PostSection from "@/components/template/post";

// import axios from 'axios'

// const fetcher = (...args) => fetch(...args).then(async(res) =>{
//   if(!res.ok){
//     const result =  await res.json()
//      throw result.message
//    } 
//    return res.json();
// })



const WorkerPage = async() => {
  // const [workerData, setWorkerData] = useState([])
  // const { data, error, isLoading } = useSWR(
  //   "https://fwm17-be-peword.vercel.app/v1/workersx",
  //   fetcher
  // );
  const workerData = await getDataWorkers()
  // const postData = getPost()

  // const getData =async()=>{
  //   const response = await fetch(`/v1/workers`, {
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     credentials: 'include',
  //     // cache: 'no-store'
  //     //  next: { revalidate: 60 }
  //   })
  
  //   const data = await response.json()
  //   console.log(data.data);
  //   setWorkerData(data.data)
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  // const [posts, worker] = await Promise.all([postData, workerData])

  return (
    <div>
     
        <div className="flex gap-4 flex-wrap">
          {/* <p>{JSON.stringify(workerData)}</p> */}
          {workerData?.data?.map((item) => (
            <div className="w-44 h-60 rounded-md border shadow-md" key={item.id}>
              <h2 className="text-lg font-bold text-center">{item.name}</h2>
              <p>Job: {item.job_desk || '-'}</p>
              <p>Domisili: {item.domicile || '-'} </p>
            </div>
          ))}
        </div>
        <hr />
        {/* <Suspense fallback={<h1>loading data post....</h1>}>
        <PostSection/>
        </Suspense> */}

    </div>
  );
};

export default WorkerPage;
