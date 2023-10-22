'use client'

import { useState, useEffect, useCallback } from "react"
import { Row } from "react-bootstrap"
import CustomContainer from "../CustomContainer"
import { useRouter } from "next/navigation"
import ImageGallery from "../ImageGallery"
import styled from 'styled-components'

const HomeGalleryHeaderContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 992px) {
    text-align: left;
  }
`

const IMAGE_GALLERY_COUNTER = [1,2,3,4,5,6,7,8]

const HomeGallery = () => {
  const router = useRouter()
  const [ width, setWidth ] = useState(0)

  const handleWidth = useCallback(
    e => {
      const window = e.currentTarget;
      if (width <= 576)
      console.log(window.innerWidth)
      setWidth(window.innerWidth);
    }, [width]
  );

  const handleClick = e => {
    e.preventDefault()
    router.push('/gallery')
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
  
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [handleWidth]);

  return (
    <CustomContainer>
      <HomeGalleryHeaderContainer>
        <h2>Our Gallery</h2>
        <p className="proj-p">See more their moment <a href={'/gallery'} onClick={handleClick} style={{ textDecoration: 'none' }}>here</a></p>
      </HomeGalleryHeaderContainer>

      <Row lg={4} sm={2} xs={1} className="row-gap-4">
        {
          width > 576 ? IMAGE_GALLERY_COUNTER.map(item => (
            <ImageGallery 
              key={item} 
              imageUrl={`/assets/carousel/wed${item}.jpg`} 
              imageAlt={`image gallery home ${item}`}
            />
          )) : IMAGE_GALLERY_COUNTER.filter(item => item <= 4).map(item => (
            <ImageGallery 
              key={item} 
              imageUrl={`/assets/carousel/wed${item}.jpg`} 
              imageAlt={`image gallery home ${item}`}
            />
          ))
        }
      </Row>
    </CustomContainer>
  )
}

export default HomeGallery