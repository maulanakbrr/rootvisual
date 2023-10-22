'use client'

import CustomContainer from "../CustomContainer"
import { FaInstagram, FaTiktok, FaEnvelope,  } from 'react-icons/fa6'
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import CustomImage from "../CustomImage"

const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  justify-content: center;

  home-contact-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start

    home-contact-icon {
      width: 2rem;
      height: 2rem;
    }
  }
`

const ContactDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .proj-p {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;

    .proj-p {
      text-align: justify;
    }
  }
`

const IMAGE_CONTACT_INDEX = [1,2,3,4]

const HomeContact = () => {
  return (
    <CustomContainer>
      <Row style={{ marginTop: '3rem' }}>
        <Col xs={12} md={6}>
          <ContactDescription>
            <h2>Contact</h2>
            <p className="proj-p">
              02, Jl. H. Rean Gg. Barokah No.46 RW.01, Benda Baru, Kec. Pamulang, Kota Tangerang Selatan, Banten 15415
            </p>

            <SocialMediaContainer>
              <FaInstagram className="home-contact-icon"/>
              <FaTiktok className="home-contact-icon"/>
              <FaEnvelope className="home-contact-icon"/>
            </SocialMediaContainer>
          </ContactDescription>
        </Col>
        <Col xs={12} md={6}>
          <Row className="row-gap-4">
            {
              IMAGE_CONTACT_INDEX.map(item => (
                <Col key={item} md={6} xs={12}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: item % 2 == 0 ? 'flex-start' : 'flex-end', 
                      width: '100%' 
                    }}
                  >
                    <CustomImage
                      imageUrl={`/assets/contact/con${item}.jpg`}
                      imageAlt={`Home Contact Image ${item}`}
                      width='12rem'
                      height='12rem'
                      square
                    />
                  </div>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
      

      
    </CustomContainer>
  )
}

export default HomeContact