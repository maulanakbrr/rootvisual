'use client'

import { Nav } from "react-bootstrap"
import styled from "styled-components"

const AdminSideNavbarContainer = styled.div`
  background-color: green;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 10;
  width: 20%;
  height: calc(100% - 112px);
`

const AdminSideNavbar = () => {
  return (
    <AdminSideNavbarContainer>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
    </Nav>
    </AdminSideNavbarContainer>
  )
}

export default AdminSideNavbar