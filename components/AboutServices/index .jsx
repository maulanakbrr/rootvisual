'use client'

import { Row, Col, Card, CardGroup } from "react-bootstrap"
import { FaImages, FaVideo,  } from "react-icons/fa6"
import { FaHome } from "react-icons/fa"
import styled from "styled-components"

const AboutServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border: 1px solid black;
  border-radius: 1rem;
  

  p {
    text-align: justify;
  }
  

  @media screen and (min-width: 992px) {
  }
`

const AboutServices = () => {
  return (
    // <Row>
    //   <Col xs={12} lg={4}>
    //     <AboutServiceCard>
    //       <FaImages style={{ fontSize: '7rem' }}/>
    //       <h6>Photo</h6>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque.
    //       </p>
    //     </AboutServiceCard>
    //   </Col>
    //   <Col xs={12} lg={4}>
    //   <AboutServiceCard>
    //       <FaVideo style={{ fontSize: '7rem' }}/>
    //       <h6>Photo</h6>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque.
    //       </p>
    //     </AboutServiceCard>
    //   </Col>
    //   <Col xs={12} lg={4}>
    //   <AboutServiceCard>
    //       <FaHome style={{ fontSize: '7rem' }}/>
    //       <h6>Photo</h6>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque.
    //       </p>
    //     </AboutServiceCard>
    //   </Col>
    // </Row>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/carousel/wed6.jpg" />
        <Card.Body>
          <Card.Title>Capture the memories</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#prewedding #wedding</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="/assets/carousel/wed7.jpg" />
        <Card.Body>
          <Card.Title>Realize your dreams</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#commercialsession #privatesession</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="/assets/carousel/wed8.jpg" />
        <Card.Body>
          <Card.Title>Connection through moments</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#familysession #groupsession</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default AboutServices