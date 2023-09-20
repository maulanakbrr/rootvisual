'use client'
import { useState } from "react"
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BootstrapNav = () => {
  // const [toggleDropdown, setToggleDropdown] = useState(false)

  // const handleToggleDropdown = () => setToggleDropdown(prev => !prev)

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RootVisual</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto"><Nav.Link href="#features">Gallery</Nav.Link></Nav> */}
          <Nav className="ms-auto ustify-content-end">
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootstrapNav