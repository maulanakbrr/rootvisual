'use client'
import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";

const LinkNav = styled.span`
  text-decoration: none;
`

const BootstrapNav = () => {
  const [y, setY] = useState(0)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' className={y ? 'bg-dark' : 'bg-transparent'}>
      <Container>
        <Navbar.Brand>
          
          <Link href='/' style={{ textDecoration: 'none'}} className="text-white">
            RootVisual
          </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ustify-content-end">
            <Nav.Link as='span'>
              <Link href='/gallery' style={{ textDecoration: 'none'}} className="text-white">Gallery</Link>
            </Nav.Link>
            <Nav.Link as='span'>
              <Link href='/about' style={{ textDecoration: 'none'}} className="text-white">About Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootstrapNav