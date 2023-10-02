'use client'

import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const DUMMY_DATA = [
  {
    id: '1',
    imageUrl: '/assets/carousel/wed1.jpg',
    title: 'First slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    id: '2',
    imageUrl: '/assets/carousel/wed2.jpg',
    title: 'Second slide label',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: '3',
    imageUrl: '/assets/carousel/wed3.jpg',
    title: 'Third slide label',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
  },
]

const CarouselBackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${props => props.imageurl ? `#CCC url(${props.imageurl}) no-repeat center center` : `#CCC `};
  background-size: cover;
`

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section style={{ }}>
    <Carousel>
      
      {
        DUMMY_DATA.map(item => (
          <Carousel.Item 
            key={item.id} 
            // interval={1000}
          >
            <CarouselBackgroundImage imageurl={item.imageUrl}/>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
      
    </Carousel>
    </section>
  )
}

export default HomeCarousel