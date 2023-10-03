'use client'

import Image from "next/image"
import styled from "styled-components"

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  border-radius: ${props => props.round ? '50%' : 'none'};
`


const CustomImage = ({ imageUrl, imageAlt, round, width, height }) => {
  
  return (
    <ImageContainer round={round} width={width} height={height}>
      <Image
        src={imageUrl} 
        alt={imageAlt} 
        fill 
        style={{objectFit:"cover"}}
      />
    </ImageContainer>
  )
}

export default CustomImage