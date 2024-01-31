"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(async(res) =>{
  if(!res.ok){
    const result =  await res.json()
     throw result.message
   } 
   return res.json();
})

const WorkerPage = () => {
  const { data, error, isLoading } = useSWR(
    "https://fwm17-be-peword.vercel.app/v1/workersx",
    fetcher
  );
  return (
    <div>
      {isLoading ? (
        <h2>Loading.....</h2>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {data?.data?.map((item) => (
            <div className="w-44 h-60 rounded-md border shadow-md">
              <h2 className="text-lg font-bold text-center">{item.name}</h2>
              <p>Job: {item.job_desk || '-'}</p>
              <p>Domisili: {item.domicile || '-'} </p>
            </div>
          ))}
        </div>
      )}

      <p>{error}</p>
    </div>
  );
};

export default WorkerPage;
