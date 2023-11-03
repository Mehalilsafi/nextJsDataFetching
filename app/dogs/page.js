import React from 'react'
import {dog} from "@/lib/dog.js"
import Image from 'next/image';
export default async function dogcall() {
     
    let res = await dog(); 
    let data =res.message ;
  return (
    <div>
     <Image src={data} alt="A dog" width={300} height={200} />
    </div>
  )
}
