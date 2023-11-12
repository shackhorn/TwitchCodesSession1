
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation';
import Attrib from '../components/Attrib';

export interface Viewer {
  pageSlug: string,
  viewerName: string,
  ideaURL: string|null
}
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://twitchcodes1.yip.to';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitch Codes with Pencil Fox',
  description: 'A site for Pencil Fox\'s "Twitch Codes" series (session #1)',
}

async function getViewerData() {
  const res = await fetch(`${server}/attrib.json`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch viewer attrib data')
  }
 
  return (res.json() as unknown) as  Viewer[];
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* 
  Pass up viewer name to this layout from the current page's getStaticProps
  */

  const res = await getViewerData();






  return (
    <html lang="en">


      <body className={inter.className}>
       <Attrib viewerData={res}/>


        {children}</body>
    </html>
  )
}
