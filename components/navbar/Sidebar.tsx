import IconArrowDown from '@/public/icons/IconArrowDown'
import IconsClose from '@/public/icons/IconsClose'
import React from 'react'
import FeaturesItems from './FeaturesItems'
import Link from 'next/link'
import { NavbarItem } from '@/types'

type Props = {
    navbarItems: NavbarItem[];
}

function Sidebar({ navbarItems }: Props) {
  return (
    <aside className='lg:hidden fixed flex flex-col gap-9 top-0 right-0 w-[250px] h-full bg-white p-5 z-20'>
        <div className='flex justify-end'>
            <button>
                <IconsClose />
            </button>
        </div>

        <div className='flex flex-col gap-4'>
            {navbarItems.map((item) => {
                return (
                    <div key={item.title}>
                        {item.isDropdown ? (
                            <div className='flex flex-col'>
                                <button className='flex gap-2 items-center link-1'>
                                    <span>{item.title}</span>
                                    <div>
                                        <IconArrowDown />
                                    </div>
                                </button>
                                <div className='h-0 overflow-hidden px-5 transition-all duration-300'>
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