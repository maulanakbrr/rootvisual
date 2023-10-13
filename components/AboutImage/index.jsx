'use client'

import Image from "next/image"
import styled from "styled-components"

const AboutImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 2rem;
`

const AboutImage = () => {
  return (
    <AboutImageContainer>
      <Image
        src='/assets/about/about2.jpg'
        alt='about us image'
        sizes='100%'
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </AboutImageContainer>
  )
}

export default AboutImage