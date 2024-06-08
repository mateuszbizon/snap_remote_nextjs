"use client"

import React, { useState } from 'react'
import Topbar from './Topbar'
import FeaturesItems from './FeaturesItems'
import { NavbarItem } from '@/types'
import Sidebar from './Sidebar'

const NAVBAR_ITEMS: NavbarItem[] = [
  { title: "Features", isDropdown: true, content: <FeaturesItems /> },
  { title: "Company", isDropdown: true, content: <FeaturesItems /> },
  { title: "Careers", isDropdown: false, link: "careers" },
  { title: "About", isDropdown: false, link: "about" },
]

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
        <Topbar navbarItems={NAVBAR_ITEMS} setSidebarOpen={setSidebarOpen} />
        <Sidebar navbarItems={NAVBAR_ITEMS} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default Navbar