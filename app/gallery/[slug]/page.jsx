'use client'

import { useParams } from 'next/navigation'
import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import GalleryDetailContent from '@/components/GalleryDetailContent'

const GalleryDetail = () => {
  const params = useParams()
  
  return (
    <CustomContainer isPage>
      <div>
        <h1>{params.slug}</h1>
        <CustomBreadcrumb firstName='Gallery' firstLink='gallery' secondName={params.slug}/>
      </div>

      <GalleryDetailContent/>
    </CustomContainer>
  )
}

export default GalleryDetail