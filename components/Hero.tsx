import IconAudiophile from '@/public/icons/IconAudiophile'
import IconDatabiz from '@/public/icons/IconDatabiz'
import IconMaker from '@/public/icons/IconMaker'
import IconMeet from '@/public/icons/IconMeet'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const HERO_ICONS_LIST = [
    { icon: <IconDatabiz /> },
    { icon: <IconAudiophile /> },
    { icon: <IconMeet /> },
    { icon: <IconMaker /> },
]

function Hero() {
  return (
    <section className='h-screen'>
        <div className='main-container flex flex-col lg:flex-row gap-12 lg:gap-10 h-full lg:pt-10 lg:pb-32'>
            <div className='h-1/3 lg:h-auto lg:w-1/2 lg:order-2'>
                <Image width={200} height={200} src="/image-hero-mobile.png" alt='remote work image' className='h-full w-full lg:hidden' />
                <Image width={200} height={200} src="/image-hero-desktop.png" alt='remote work image' className='h-full w-full hidden lg:block' />
            </div>

            <div className='flex flex-col lg:justify-end gap-5 lg:gap-10 px-3 lg:pt-20 lg:pr-24 lg:w-1/2'>
                <h1 className='text-4xl lg:text-7xl text-center lg:text-left font-bold'>Make remote work</h1>
                <p className='text-center lg:text-left lg:text-lg text-gray-1'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <div className='flex justify-center lg:justify-start'>
                    <Link href={"#"} className='btn-outline-1'>
                        Learn more
                    </Link>
                </div>
                <div className='grid grid-cols-4 gap-5 items-center mt-10'>
                    {HERO_ICONS_LIST.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                {item.icon}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero