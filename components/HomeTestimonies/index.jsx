'use client'

import CustomContainer from "../CustomContainer"
import { useRouter } from "next/navigation"
import TestimonyCard from "../TestimonyCard"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"

const HomeTestimoniesHeaderContainer = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`

const HomeTestimonies = () => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/testimonies')
  }
  return (
    <CustomContainer>
      <HomeTestimoniesHeaderContainer>
        <h2 style={{ textAlign: 'center' }}>What they said</h2>
        <p style={{ textAlign: 'center' }} className="proj-p">What do they experiencing us? see more their stories <a href={'/gallery'} onClick={handleClick} style={{ textDecoration: 'none' }}>here</a></p>
      </HomeTestimoniesHeaderContainer>

      <div>
        <Carousel data-bs-theme="dark" controls={false}>
          <Carousel.Item>
            <TestimonyCard isHomepage/>
          </Carousel.Item>

          <Carousel.Item>
            <TestimonyCard isHomepage/>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </CustomContainer>
  )
}

export default HomeTestimonies