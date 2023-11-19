
'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import {getspeacial} from "@/lib/getspeacial"
import { Suspense } from 'react'

export default async function page({params}) {
    let {id} =params; 
    let res=  await getspeacial(id);


    return (

      <main className="flex flex-col items-center justify-center h-screen  bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">User Details</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
      <p className="text-lg">{res.body}</p>
      </Suspense>
   
      </main>
      )
}
