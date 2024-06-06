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
                <div className='group flex gap-2 items-center text-grey-1 hover:text-dark-1 transition cursor-pointer'>
                    <span>Features</span>                  
                    <div className='group-hover:rotate-180 transition-all duration-300'>
                        <IconArrowDown />
                    </div>
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