import React from 'react'

import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import GalleryHeader from '@/components/GalleryHeader'
import GalleryContent from '@/components/GalleryContent'

const Gallery = () => {
  return (
    <CustomContainer isPage>
      <div style={{ textAlign: 'center' }}>
        <h1>Gallery</h1>
        <CustomBreadcrumb firstName='Gallery'/>
      </div>

      <GalleryHeader/>

      <GalleryContent/>
    </CustomContainer>
  )
}

export default Gallery