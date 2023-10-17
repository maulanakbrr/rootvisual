'use client'

import { Carousel } from "react-bootstrap"
import TestimonyCard from "../TestimonyCard"

const TestimoniesHeader = () => {
  return (
    <div style={{ margin: '4rem 0 5rem'}}>
      <Carousel data-bs-theme="dark" controls={false}>
        <Carousel.Item>
          <TestimonyCard isHomepage/>
        </Carousel.Item>

        <Carousel.Item>
          <TestimonyCard isHomepage/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default TestimoniesHeader