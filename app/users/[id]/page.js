
'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import {getspeacial} from "@/lib/getspeacial"
import style from "./style.css"
export default async function page({params}) {
    let{id} =params; 
    let res=  await getspeacial(id);
    return (
      <main>
        <p className="safi">detials product </p>
        <p>{res.body}</p>
      </main>
      )
}
