
import Image from 'next/image'
import Link  from 'next/link'

export default function Home() {
  return (

   <main className='bg-[#f9f5f5] h-4/5 '> 
     <Link href="./users" > List of users </Link>
     <br></br>
  
   </main>
  )
}
