'use client'

import Image from "next/image"
import { useState } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"

const ImageGalleryContainer = styled(Col)`
  position: relative;

  &:hover img {
    opacity: .3
  }

  &:hover .middle {
    opacity: 1;
  }
`

const ImageTitleContainer = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImageGallery = ({ imageUrl, imageAlt, isGalleryPage }) => {
  const [ isHover, setIsHover ] = useState(false)
  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  if (isGalleryPage) return (
    <ImageGalleryContainer 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={imageUrl}
        alt={imageAlt || 'image'}
        width={50}
        height={50}
        sizes='100%'
        style={{
          width: '100%',
          height: 'auto',
          transition: '.5s ease',
          backfaceVisibility: 'hidden'
        }}
      />
      <ImageTitleContainer className="middle">
        <div>{imageAlt}</div>
      </ImageTitleContainer>
    </ImageGalleryContainer>
  )

  return (
    <Col 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ opacity: isHover ? '1' : '.8' }}
    >
      <Image
        src={imageUrl}
        alt={imageAlt || 'image'}
        width={50}
        height={50}
        sizes='100%'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </Col>
  )
}

export default ImageGallery