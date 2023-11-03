
import Image from 'next/image'
import Link  from 'next/link'

export default function Home() {
  return (

   <main> 
     <Link href="./users"> click me to users</Link>
     <br></br>
     <Link href="./dogs"> click to take me to the dge </Link>
   </main>
  )
}
