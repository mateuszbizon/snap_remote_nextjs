import IconArrowDown from '@/public/icons/IconArrowDown'
import IconMenu from '@/public/icons/IconMenu'
import Logo from '@/public/icons/Logo'
import Link from 'next/link'
import React from 'react'

function Topbar() {
  return (
    <nav className='flex justify-between px-3 py-5 lg:px-8'>
        <div className='flex gap-16'>
            <Logo />
            <div className='hidden lg:flex gap-8'>
                <div className='flex gap-2 items-center'>
                    <span>Features</span>                  
                    <IconArrowDown />
                </div>
                <span>Company</span>
                <span>Careers</span>
                <span>About</span>
            </div>
        </div>

        <div>
            <div className='hidden lg:flex gap-4'>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
            <button className='lg:hidden'>
                <IconMenu />
            </button>
        </div>
    </nav>
  )
}

export default Topbar