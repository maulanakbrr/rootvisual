'use client'

import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <>
      <Spinner animation="grow" size='md' className="me-2"/>
      <Spinner animation="grow" size='md' className="me-2"/>
      <Spinner animation="grow" size='md'/>
    </>
  )
}
export default Loader
