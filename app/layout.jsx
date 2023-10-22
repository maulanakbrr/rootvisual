import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import MainContainer from '@/components/MainContainer';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'RootVisual',
  description: 'Photographer and Videographer',
  keywords: 'photgrapher, videographer, rental studio, prewedding, couple, group, family'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <MainContainer>
          {children}
        </MainContainer>
        <Footer/>
      </body>
    </html>
  )
}
