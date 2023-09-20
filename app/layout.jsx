import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import BootstrapNav from '@/components/BootstrapNav'
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
        <BootstrapNav/>
        <main className='proj-main-container'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
