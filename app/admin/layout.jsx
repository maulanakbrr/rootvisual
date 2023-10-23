'use client'

import { usePathname } from "next/navigation"
import AdminSideNavbar from "@/components/Navbar/AdminSideNavbar"
import CustomContainer from "@/components/CustomContainer"

const AdminLayout = ({children}) => {
  const pathname = usePathname()
  if (pathname.includes('sign-in')) return (
    <div>
      {children}
    </div>
  )

  return (
    <div>
      <AdminSideNavbar/>
      <CustomContainer isAdmin>
        {children}
      </CustomContainer>
    </div>
  )
}

export default AdminLayout