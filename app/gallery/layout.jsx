import GalleryProvider from './context'
import ScrollTopIcon from '@/components/ScrollTopIcon'

const GalleryLayout = ({children}) => {
  return (
    <GalleryProvider>
      <ScrollTopIcon/>
      {children}
    </GalleryProvider>
  )
}

export default GalleryLayout