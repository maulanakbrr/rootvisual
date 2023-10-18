import GalleryProvider from './context'

const GalleryLayout = ({children}) => {
  return (
    <GalleryProvider>
      <div>sisisi</div>
      {children}
    </GalleryProvider>
  )
}

export default GalleryLayout