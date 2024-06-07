import React from 'react'
import Topbar from './Topbar'
import FeaturesItems from './FeaturesItems'
import { NavbarItem } from '@/types'

const NAVBAR_ITEMS: NavbarItem[] = [
  { title: "Features", isDropdown: true, content: <FeaturesItems /> },
  { title: "Company", isDropdown: true, content: <FeaturesItems /> },
  { title: "Careers", isDropdown: false, link: "careers" },
  { title: "About", isDropdown: false, link: "about" },
]

function Navbar() {
  return (
    <>
        <Topbar navbarItems={NAVBAR_ITEMS} />
    </>
  )
}

export default Navbar