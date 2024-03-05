// import { getDataWorkers } from "@/service/worker";
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

import {getWorkers} from '@/service/worker'



const WorkerPage = async() => {
  // const [workerData, setWorkerData] = useState([])
  // const { data, error, isLoading } = useSWR(
  //   "https://fwm17-be-peword.vercel.app/v1/workersx",
  //   fetcher
  // );
  // const workerData = await getDataWorkers()
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

  const workerData = await getWorkers()


  return (
    <div>
     
        <div className="flex gap-4 flex-wrap">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quas, ducimus reiciendis itaque perferendis unde maxime inventore nostrum. Ipsam eveniet error quia consequuntur rerum ea delectus velit odio commodi eaque? Distinctio officia assumenda accusantium quaerat recusandae, laudantium tenetur odit quae animi, et maiores eos corrupti ipsam quisquam vero ipsa delectus temporibus doloribus natus. Nulla laboriosam perferendis ad corporis. Sequi in quo dolores voluptate sapiente voluptatum iusto mollitia delectus repellat exercitationem rerum veniam ex eligendi velit, quam, excepturi fuga nisi ullam! Excepturi at, enim sint quibusdam iste quae debitis deleniti provident voluptatum amet! Consequatur reiciendis quis porro dicta impedit minima dolor.</p>
          <p>{JSON.stringify(workerData)}</p>
          {
          workerData?.data?.map((item) => (
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
