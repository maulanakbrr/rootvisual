'use client'

import { Row, Col } from "react-bootstrap"
import { TESTIMONIES_DUMMY } from "./dummy"
import TestimonyCard from "../TestimonyCard"

const TestimoniesContent = () => {
  return (
    <Row>
      {
        TESTIMONIES_DUMMY.map(item => (
          <Col key={item.id} xs={12} md={6} lg={4} xl={3}>
            <TestimonyCard data={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default TestimoniesContent