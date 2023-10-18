'use client'

import { useState, useEffect, useContext } from "react"
import { GalleryContext } from "@/app/gallery/context"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const GalleryHeaderCol = styled(Col)`
  text-align: center;

  span {

    &:hover {
      color: white;
      cursor: pointer;
      border: .1rem solid #0d6efd;
      padding: .5rem .8rem;
      border-radius: 1rem;
      background-color: #0d6efd;
    }
  }

  .active {
    color: white;
    border: .1rem solid #0d6efd;
    padding: .5rem .8rem;
    border-radius: 1rem;
    background-color: #0d6efd;
  }
`

const GalleryHeader = () => {
  const { currentpage, setCurrentpage } = useContext(GalleryContext)

  console.log('currentpage:: ', currentpage)

  return (
    <Row className="my-5">
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'gallery' && 'active' }
          onClick={() => setCurrentpage('gallery')}
        >All</span>
      </GalleryHeaderCol>
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'prewedding' && 'active' }
          onClick={() => setCurrentpage('prewedding')}
        >Prewedding</span>
      </GalleryHeaderCol>
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'wedding' && 'active' }
          onClick={() => setCurrentpage('wedding')}
        >Wedding</span>
      </GalleryHeaderCol>
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'group' && 'active' }
          onClick={() => setCurrentpage('group')}
        >Family/Group</span>
      </GalleryHeaderCol>
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'private' && 'active' }
          onClick={() => setCurrentpage('private')}
        >Private</span>
      </GalleryHeaderCol>
      <GalleryHeaderCol>
        <span 
          className={ currentpage === 'commercil' && 'active' }
          onClick={() => setCurrentpage('commercil')}
        >Commercil</span>
      </GalleryHeaderCol>
    </Row>
  )
}

export default GalleryHeader