'use client'
import { useParams } from 'next/navigation'
import CustomContainer from '@/components/CustomContainer'

const GalleryDetail = () => {
  const params = useParams()
  console.log('params:: ', params)
  
  return (
    <CustomContainer isPage>{params.slug}</CustomContainer>
  )
}

export default GalleryDetail