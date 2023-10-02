'use client'

import { Container } from "react-bootstrap"
import styled from "styled-components"

const ModContainer = styled(Container)`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    height: 100vh;
  }
`


const CustomContainer = ({ children }) => {
  return (
    <ModContainer>{children}</ModContainer>
  )
}

export default CustomContainer