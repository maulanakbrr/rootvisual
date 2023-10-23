'use client'

import { useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import AdminNavbar from "./AdminNavbar"
import BootstrapNav from "./BootstrapNavbar"

const Navbar = () => {
  const pathname = usePathname()
  const [ isAdmin, setIsAdmin ] = useState(false)

  useEffect(() => {
    if (pathname.includes('admin')) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [pathname])

  const isAdminMemo = useMemo(() => handleIsAdmin(isAdmin), [isAdmin])

  return (
    <>
      {
        isAdminMemo ? (
          <AdminNavbar/>
        ) : (
          <BootstrapNav/>
        )
      }
    </>
  )
}

const handleIsAdmin = val => {
  if (val) {
    return 1
  } else {
    return
  }
}

export default Navbar