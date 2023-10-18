'use client'

import { useState, useEffect } from "react"
import { Col } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const GalleryCardContainer = styled(Col)`
  position: relative;
  .img-container {
    opacity: 1;
    width: 100%;
    position: relative;
    height: 15rem;

    @media screen and (min-width: 1200px) {
      height: ${props => props.size === 'large' ? '25rem' : '15rem'};
    }
  }

  &:hover {
    .img-container{
      opacity: .3;
    }

    .desc {
      opacity: 1;
    }
  }

  .desc {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .desc-text {
      color: black;
      text-decoration: none;
    }
  }
`

const GalleryCard = ({size = 'normal'}) => {
  const [ breakpoints, setBreakpoints ] = useState({
    lg: 4,
    xl: 4
  })

  useEffect(() => {
    checkSize(size)
  }, [size])

  const checkSize = (size) => {
    if (size === 'large') {
      setBreakpoints({
        lg: 6, xl: 6
      })
    } else if (size === 'small') {
      setBreakpoints(prev => ({
        ...prev,
        xl: 3
      }))
    }
  }

  return (
    <GalleryCardContainer xs={12} md={6} {...breakpoints} size={size}>
      <div className="img-container">
        <Image
          src='/assets/carousel/wed1.jpg'
          alt='image 1'
          fill 
          style={{ 
            objectFit:"cover"
          }}
        />
      </div>
      <div className="desc">
        <Link href={`/gallery/${encodeURIComponent('jane-and-joe')}`} className="desc-text">Jane and Joe</Link>
      </div>
    </GalleryCardContainer>
  )
}

export default GalleryCard