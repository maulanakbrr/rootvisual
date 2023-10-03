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
`

const iconStyle = {
  width: '2rem',
  height: '2rem',
}

const IMAGE_CONTACT_INDEX = [1,2,3,4]

const HomeContact = () => {
  return (
    <CustomContainer>
      <Row>
        <Col xs={12} md={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2>Contact</h2>
            <p className="proj-p">
              02, Jl. H. Rean Gg. Barokah No.46 RW.01, Benda Baru, Kec. Pamulang, Kota Tangerang Selatan, Banten 15415
            </p>

            <SocialMediaContainer>
              <FaInstagram style={iconStyle}/>
              <FaTiktok style={iconStyle}/>
              <FaEnvelope style={iconStyle}/>
            </SocialMediaContainer>
          </div>
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