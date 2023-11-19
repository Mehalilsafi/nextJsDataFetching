
import Image from 'next/image'
import Link  from 'next/link'

export default function Home() {
  return (
<main className="flex flex-col items-center justify-center h-screen bg-[#f9f5f5]">
  <Link href="./users" className="text-blue-500 underline mb-4">
    <h1>List of Users</h1>
    </Link>
</main>

  )
}
