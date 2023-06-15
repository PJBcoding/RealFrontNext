import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Real Asssam - the real face of assam',
  description: 'This is realasssam.com . Blogs , news , reviews ,informations of various aspects of Assam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
