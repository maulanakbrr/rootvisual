'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import CustomContainer from '../CustomContainer'

const ThisRow = styled(Row)`
  #home-about-desc {
    margin-bottom: 1rem;
    text-align: justify;
  }

  #home-about-btn-container {
    text-align: center;
    margin-bottom: 3rem;
  }

  #home-about-image-container {
    display: none;
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: .5rem;
    margin-bottom: 3rem; 
  }

  @media screen and (min-width: 768px) {
    #home-about-desc {
      text-align: center;
    }
  }

  @media screen and (min-width: 992px) {
    #home-about-desc {
      width: 100%;
      text-align: justify;
    }

    #home-about-btn-container {
      text-align: left;
      margin-bottom: 0;
      margin-top: 2rem;
    }

    #home-about-image-container {
      margin-bottom: 0;
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    #home-about-image-container {
      margin-top: .5rem;
    }
  }
`

const MainTitle = styled.h1`
  text-align: center;
  margin-top: 3rem;

  @media screen and (min-width: 992px) {
    margin-top: 0;
    text-align: left;
  }
`

const HomeAbout = () => {
  return (
    <CustomContainer>
      <MainTitle>Welcome to RootVisual</MainTitle>
      <ThisRow>
        <Col xl={8} lg={6} xs={12}>

          <p id='home-about-desc' className='proj-p'>
            Introducing, we, RootVisual sincerely keen to enlighten up and memorialize your celebration. Established since 2016 and located in South Tangerang, Indonesia. However, we would love to accompany you all over the world. Every single detail of your moment will be wellcelebrated with our delightful and fun working atmosphere also professional team. Moreover, we offer you various moodboards, stylists, make-ups, dress vendors, and many more. So, what are you waiting for? there is no more doubts and fears to be in front of the camera. Cheers!
          </p>

          <div id='home-about-btn-container'>
            <Link href='/about' style={{ textDecoration: 'none' }}>
              <Button variant='primary'>
                About Us
              </Button>
            </Link>
          </div>
        </Col>

        <Col xl={4} lg={6} xs={12}>
          <div id='home-about-image-container'>
            <Image
              src='/assets/carousel/wed8.jpg'
              alt='image'
              width={50}
              height={50}
              sizes='100%'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        </Col>
      </ThisRow>
    </CustomContainer>
  )
}

export default HomeAbout