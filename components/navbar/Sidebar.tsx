"use client"

import IconArrowDown from '@/public/icons/IconArrowDown'
import IconsClose from '@/public/icons/IconsClose'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import { NavbarItem } from '@/types'

type Props = {
    navbarItems: NavbarItem[];
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ navbarItems, sidebarOpen, setSidebarOpen }: Props) {
    const [activeItems, setActiveItems] = useState<number[]>([])

    function handleSetActiveItems(itemIndex: number) {
        if (activeItems.includes(itemIndex)) {
            const filteredArray = activeItems.filter(item => item !== itemIndex);

            setActiveItems([...filteredArray])
            return;
        }

        setActiveItems(prev => [...prev, itemIndex])
    }

  return (
    <aside className={`lg:hidden fixed flex flex-col gap-9 top-0 right-0 ${sidebarOpen ? "translate-x-0" : "translate-x-full"} w-[250px] h-full bg-white p-5 z-20 transition-all duration-300`}>
        <div className='flex justify-end'>
            <button onClick={() => setSidebarOpen(prev => !prev)}>
                <IconsClose />
            </button>
        </div>

        <div className='flex flex-col gap-4'>
            {navbarItems.map((item, index) => {
                return (
                    <div key={item.title}>
                        {item.isDropdown ? (
                            <div className='flex flex-col'>
                                <button className='flex gap-2 items-center link-1' onClick={() => handleSetActiveItems(index)}>
                                    <span>{item.title}</span>
                                    <div>
                                        <IconArrowDown />
                                    </div>
                                </button>
                                <div className={`${activeItems.includes(index) ? "max-h-[500px] mt-5" : "max-h-0"} overflow-hidden px-5 transition-all duration-300`}>
                                    {item.content}
                                </div>
                            </div>
                        ) : (
                            <Link href={`/${item.link}`} className='link-1'>{item.title}</Link>
                        )}
                    </div>
                )
            })}
        </div>

        <div className='flex flex-col items-center gap-4'>
            <Link href="/login" className='link-1'>Login</Link>
            <Link href="/register" className='btn-outline-1 w-full text-center'>Register</Link>
        </div>
    </aside>
  )
}

export default Sidebar