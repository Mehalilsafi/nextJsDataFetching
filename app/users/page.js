
import {getUser} from "@/lib/getUser"
import Link from "next/link"
import { Suspense } from 'react'
export const metadata = {
    title: 'users',
  }
   
  export default async function Page() {
       let resulte=await getUser();
  
  let objUsers=resulte.map((ele)=>{
    return <Link href={`./users/${ele.id}`} key={ele.id}>{ele.username} 
      <br></br>


     </Link>
  })
    return(
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-4"> List of users </h1>
      <Suspense fallback={<p>Loading feed...</p>}>
         {objUsers}
      </Suspense>
      
    </main>
    
    )
  }



 