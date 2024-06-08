"use client"

import IconArrowDown from '@/public/icons/IconArrowDown'
import IconMenu from '@/public/icons/IconMenu'
import Logo from '@/public/icons/Logo'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { NavbarItem } from '@/types'

type Props = {
    navbarItems: NavbarItem[];
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

function Topbar({ navbarItems, setSidebarOpen }: Props) {
  return (
    <nav className='flex justify-between px-3 py-5 lg:px-8 items-center'>
        <div className='flex gap-16'>
            <Logo />
            <div className='hidden lg:flex gap-8'>
                {navbarItems.map((item) => {
                    return (
                        <div key={item.title}>
                            {item.isDropdown ? (
                                <div className='group relative flex gap-2 items-center link-1'>
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
                                    <Link href={`/${item.link}`} className='link-1'>{item.title}</Link>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>

        <div>
            <div className='hidden lg:flex gap-10 items-center'>
                <Link href="/login" className='link-1'>Login</Link>
                <Link href="/register" className='btn-outline-1'>Register</Link>
            </div>
            <button className='lg:hidden' onClick={() => setSidebarOpen(prev => !prev)}>
                <IconMenu />
            </button>
        </div>
    </nav>
  )
}

export default Topbar