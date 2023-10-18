'use client'

import { Row } from "react-bootstrap"
import GalleryCard from "../GalleryCard"

const GalleryContent = () => {
  return (
    <div>
      <div>
        <Row className="mt-4 row-gap-4">
          <GalleryCard size='large'/>
          <GalleryCard size='large'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
          <GalleryCard size='small'/>
        </Row>
      </div>
    </div>
  )
}

export default GalleryContent