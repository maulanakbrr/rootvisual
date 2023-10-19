'use client'

import { Row, Col } from "react-bootstrap"
import Image from "next/image"

const DUMMY = [1,2,3,4,5,6,7,8,9,10]

const GalleryDetailContent = () => {
  return (
    <Row className="mt-4 row-gap-4">
      {
        DUMMY.map(item => (
          <Col key={item} xs={12} md={6} className="d-flex align-items-center">
            {/* <div style={{ position: 'relative', width: '100%', height: '100%'}}> */}
              <Image
                src={`/assets/gallery/gallery${item}.jpg`}
                alt={`image${item}`}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                width={500}
                height={300}
              />
            {/* </div> */}
          </Col>
        ))
      }
    </Row>
  )
}

export default GalleryDetailContent