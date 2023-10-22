'use client'

import Link from "next/link"
import { Container, Navbar } from "react-bootstrap"

const AdminNavbar = () => {
  return (
    <Navbar fixed='top' bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link href='/' style={{ textDecoration: 'none'}} className="text-white">
            RootVisual
          </Link>
        </Navbar.Brand>

        <Navbar.Text>
          Welcome dude
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default AdminNavbar