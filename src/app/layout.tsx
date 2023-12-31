import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontera Inmobiliaria',
  description: 'Aplicación busqueda de inmuebles, propidades en alquiler y venta.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}></Navbar>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        
        <Footer />

      </body>
    </html>
  )
}
