import IconArrowDown from '@/public/icons/IconArrowDown'
import IconMenu from '@/public/icons/IconMenu'
import Logo from '@/public/icons/Logo'
import Link from 'next/link'
import React from 'react'
import { NavbarItem } from '@/types'

type Props = {
    navbarItems: NavbarItem[];
}

function Topbar({ navbarItems }: Props) {
  return (
    <nav className='flex justify-between px-3 py-5 lg:px-8'>
        <div className='flex gap-16'>
            <Logo />
            <div className='hidden lg:flex gap-8'>
                {navbarItems.map((item) => {
                    return (
                        <div key={item.title}>
                            {item.isDropdown ? (
                                <div className='group relative flex gap-2 items-center text-gray-1 hover:text-dark-1 transition'>
                                    <span>{item.title}</span>                  
                                    <div className='group-hover:rotate-180 transition-all duration-300'>
                                        <IconArrowDown />
                                    </div>
                                    <div className='nav-item-menu group-hover:nav-item-menu-show'>
                                        <div className='absolute -top-3 left-0 w-full h-3 opacity-0 group-hover:opacity-100'></div>
                                        {item.content}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link href={`/${item.link}`}>{item.title}</Link>
                                </>
                            )}
                        </div>
                    )
                })}
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