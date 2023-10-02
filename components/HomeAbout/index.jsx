'use client'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const ThisContainer = styled(Container)`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    height: 100vh;
  }
`

const ThisRow = styled(Row)`
  #home-about-desc {
    margin-bottom: 2rem;
    letter-spacing: .1rem;
    font-size: 1rem;
    text-align: center;
  }

  #home-about-btn-container {
    text-align: center;
    margin-bottom: 3rem;
  }

  #home-about-image-container {
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: .5rem;
    margin-bottom: 3rem; 
  }

  @media screen and (min-width: 992px) {
    #home-about-desc {
      width: 100%;
      text-align: justify;
    }

    #home-about-btn-container {
      text-align: left;
      margin-bottom: 0;
    }

    #home-about-image-container {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1200px) {

    #home-about-desc {
      font-size: 1.2rem;
    }

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
    <ThisContainer>
      <MainTitle>Welcome to RootVisual</MainTitle>
      <ThisRow>
        <Col xl={8} lg={6} xs={12}>

          <p id='home-about-desc'>
            Introducing, we, RootVisual sincerely keen to enlighten up and memorialize your celebration. Established since 2016 and located in South Tangerang, Indonesia. However, we would love to accompany you all over the world. Every single detail of your moment will be wellcelebrated with our delightful and fun working atmosphere also professional team. Moreover, we offer you various moodboards, stylists, make-ups, dress vendors, and many more. So, what are you waiting for? there is no more doubts and fears to be in front of the camera. Cheers!
          </p>

          <div id='home-about-btn-container'>
          <Link href='/about' style={{ textDecoration: 'none', marginTop: '3rem' }}>
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
    </ThisContainer>
  )
}

export default HomeAbout