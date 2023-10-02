'use client'

import { Row } from "react-bootstrap"
import CustomContainer from "../CustomContainer"
import { useRouter } from "next/navigation"
import ImageGallery from "../ImageGallery"

const IMAGE_GALLERY_COUNTER = [1,2,3,4,5,6,7,8]

const HomeGallery = () => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/gallery')
  }


  return (
    <CustomContainer>
      <h2>Our Gallery</h2>
      <p><a href={'/gallery'} onClick={handleClick} style={{ textDecoration: 'none' }}>Click here</a> too see more</p>

      <Row lg={4} className="row-gap-4">
        {
          IMAGE_GALLERY_COUNTER.map(item => (
            <ImageGallery 
              key={item} 
              imageUrl={`/assets/carousel/wed${item}.jpg`} 
              imageAlt={`image gallery home ${item}`}
              // isGalleryPage
            />
          ))
        }
      </Row>
    </CustomContainer>
  )
}

export default HomeGallery