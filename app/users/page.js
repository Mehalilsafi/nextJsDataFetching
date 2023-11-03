
import {getUser} from "@/lib/getUser"
import Link from "next/link"
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
        <main>
      
      {objUsers}
      
        </main>
    )
  }



 