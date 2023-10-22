'use client'

import Link from "next/link"
import { Container, Navbar } from "react-bootstrap"

const OnlyLogoNavbar = () => {
  return (
    <Navbar fixed='top' bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link href='/' style={{ textDecoration: 'none'}} className="text-white">
            RootVisual
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default OnlyLogoNavbar