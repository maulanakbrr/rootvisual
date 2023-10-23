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
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const AdminContainer = styled.div`
  margin-top: 56px;
  margin-left: 20%;
  width: 80%;
  min-height: calc(100vh - 112px);
  background-color: pink;
  overflow-y: auto;
`

const CustomContainer = ({ children, isPage, isAdmin }) => {
  if (isPage) return (
    <PageContainer>{children}</PageContainer>
  )

  if (isAdmin) return (
    <AdminContainer>{children}</AdminContainer>
  )

  return (
    <ModContainer>{children}</ModContainer>
  )
}

export default CustomContainer