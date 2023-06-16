import '@libs/globals.css'
import NavBar from "@includes/NavBar"
import Footer from "@includes/Footer"

export const metadata = {
  title: 'Dr. Kait Whitcomb',
  description: 'Licensed therapist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
