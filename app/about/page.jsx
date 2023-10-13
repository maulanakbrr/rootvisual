import React from 'react'

import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import AboutImage from '@/components/AboutImage'
import AboutServices from '@/components/AboutServices/index '

const About = () => {
  return (
    <CustomContainer isPage>
      <div style={{ textAlign: 'center' }}>
        <h1>About Us</h1>
        <CustomBreadcrumb firstName='About Us'/>
      </div>

      <div style={{ margin: '2rem 0 4rem' }}>
        <AboutImage/>
        <p style={{ textAlign: 'justify' }} className='proj-p'>
          Introducing, we, RootVisual sincerely keen to enlighten up and memorialize your celebration. Established since 2016 and located in South Tangerang, Indonesia. However, we would love to accompany you all over the world. Every single detail of your moment will be wellcelebrated with our delightful and fun working atmosphere also professional team. Moreover, we offer you various moodboards, stylists, make-ups, dress vendors, and many more. So, what are you waiting for? there is no more doubts and fears to be in front of the camera. Cheers!
        </p>
      </div>

      <div>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5em' }}>Our Services</h4>
        <AboutServices/>
      </div>
    </CustomContainer>
  )
}

export default About