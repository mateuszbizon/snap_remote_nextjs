"use client"

import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    shadowOpen: boolean;
    closeShadow: Dispatch<SetStateAction<boolean>>;
}

function Shadow({ shadowOpen, closeShadow }: Props) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-10 bg-dark-1/50 ${shadowOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`} onClick={() => closeShadow(false)}></div>
  )
}

export default Shadow