'use client'

import Link from "next/link"
import styled from "styled-components"

const AdminSideNavbarContainer = styled.div`
  border-right: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background-color: #212529;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 10;
  width: 20%;
  height: calc(100% - 112px);
  padding: 2rem 1.5rem;

  ul {
    list-style-type: none;
    padding-left: 2rem;

    li {
      text-decoration: none;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      
      .side-link {
        text-decoration: none;
        color: white;

        &:hover {
          color: blue;
        }
      }
    }
  }
`

const AdminSideNavbar = () => {

  return (
    <AdminSideNavbarContainer>
      <ul>
        <li>
          <Link href='/admin/dashboard' className="side-link">Dashboard</Link>
        </li>
        <li>
          <Link href='/admin/portfolio' className="side-link">Portfolio</Link>
        </li>
        <li>
          <Link href='/admin/user' className="side-link">User</Link>
        </li>
        <li>
          <Link href='/admin/content' className="side-link">Content</Link>
        </li>
      </ul>
    </AdminSideNavbarContainer>
  )
}

export default AdminSideNavbar