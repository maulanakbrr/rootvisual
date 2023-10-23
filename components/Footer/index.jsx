'use client'

import { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { usePathname } from "next/navigation"

const FooterContainer = styled.div`
  ${
    props => props.isAdmin && `
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    ` 
  }
  
  p {
    margin-bottom: 0;
    text-align: center;
  }
`

const Footer = () => {
  const pathname = usePathname()
  const [ admin, setAdmin ] = useState(false)

  useEffect(() => {
    if (pathname.includes('admin')) {
      setAdmin(true)
    } else {
      setAdmin(false)
    }
  }, [pathname])

  const isAdmin = useMemo(() => checkIsAdmin(admin), [admin])

  return (
    <FooterContainer className="footer mt-auto py-3 bg-dark text-white" isAdmin={isAdmin}>
        <div className="container">
            <p>&copy; 2023 RootVisual - Photography & Videography</p>
        </div>
    </FooterContainer>
  )
}

const checkIsAdmin = val => {
  if (val) {
    return 1
  } else {
    return
  }

}

export default Footer