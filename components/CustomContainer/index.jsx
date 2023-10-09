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

const PageContainer = styled(Container)`
  margin-top: 56px;
  padding: 3rem 0;
`

const CustomContainer = ({ children, isPage }) => {
  if (isPage) return (
    <PageContainer>{children}</PageContainer>
  )

  return (
    <ModContainer>{children}</ModContainer>
  )
}

export default CustomContainer