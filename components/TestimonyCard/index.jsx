'use client'

import Image from "next/image"
import styled from "styled-components"

const TestimonyCardContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isHomepage ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
  padding: ${props => props.isHomepage ? '4rem 0 5rem 0' : '2rem 1.5rem' } ;
  width: ${props => props.isHomepage ? '80%' : '100%'};
  margin: 0 auto;
  border: ${props => props.isHomepage ? 'none' : '1px solid rgba(0,0,0,.5)'};
  border-radius: ${props => props.isHomepage ? 'none' : '1em' };
`

const homepageStyle = {
  borderRadius: '50%', 
  overflow: 'hidden',
  position: 'relative',
  width: '5rem',
  height: '5rem',
  marginRight: '1rem'
}

const defaultStyle = {
  width: 'calc(100% + 3rem)',
  height: '10rem',
  position: 'relative',
  top: '-2rem',
  left: '0',
}

const TestimonyCard = ({isHomepage, data}) => {
  return (
    <TestimonyCardContainer isHomepage={isHomepage}>
      <div style={isHomepage ? homepageStyle : defaultStyle}>
        <Image src={data?.imageUrl || '/assets/ava/ava1.jpg'} alt={data?.source || 'image'} fill style={{objectFit:"cover", borderTopLeftRadius: '1em', borderTopRightRadius: '1em' }}/>
      </div>
      
      <blockquote 
        className="blockquote mb-0 d-flex flex-column justify-content-center" 
        style={{ marginTop: isHomepage ? '0' : '.2rem' }}
      >
        <p style={{ textAlign: 'justify' }}>
          {' '}
          {data?.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'}
          {' '}
        </p>
        <footer className="blockquote-footer">
          {data?.source || 'Someone famous in'} 
        </footer>
      </blockquote>
    </TestimonyCardContainer>
  )
}

export default TestimonyCard