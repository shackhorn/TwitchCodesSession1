import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-center mb-5">
        Check out the following pages made during the first Pencil Fox Twitch Codes session!
      </h1>
    
      <Link className="text-xl font-black" style={{color: "orange"}} href="/cat-boom">
      Silly Cat Game
      </Link>
      <br/>
      <Link className="text-xl font-black" style={{color: "orange"}} href="/yippee">
      Yippee Button
      </Link>



    </main>
  )
}
