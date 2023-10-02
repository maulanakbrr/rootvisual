'use client'

import CustomContainer from "../CustomContainer"
import { useRouter } from "next/navigation"
import TestimonyCard from "../TestimonyCard"
import { Carousel } from "react-bootstrap"

const HomeTestimonies = () => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/testimonies')
  }
  return (
    <CustomContainer>
      <h2 style={{ textAlign: 'center' }}>What they said</h2>
      <p style={{ textAlign: 'center' }} className="proj-p">What do they experiencing us? see more their stories <a href={'/gallery'} onClick={handleClick} style={{ textDecoration: 'none' }}>here</a></p>

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