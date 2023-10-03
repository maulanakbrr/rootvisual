'use client'

import Image from "next/image"
import styled from "styled-components"

const TestimonyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.isHomepage ? '4rem 0 5rem 0' : '2rem 0' } ;
  width: ${props => props.isHomepage ? '80%' : '100%'};
  margin: 0 auto;
`

const TestimonyCard = ({isHomepage}) => {
  return (
    <TestimonyCardContainer isHomepage={isHomepage}>
      <div style={{ borderRadius: '50%', overflow: 'hidden', position: 'relative', width: '5rem', height: '5rem', marginRight: '1rem' }}>
        <Image src='/assets/ava/ava1.jpg' alt='image' fill style={{objectFit:"cover"}}/>
        
      </div>
      <blockquote className="blockquote mb-0 d-flex flex-column justify-content-center">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </TestimonyCardContainer>
  )
}

export default TestimonyCard