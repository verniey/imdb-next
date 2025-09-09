'use client'
import React from 'react'

import { MdDarkMode, MdLightMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
    const { theme, setTheme, systemThem } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'sysytem' ? systemThem : theme
    useEffect(() => setMounted(true), [])
  return (
    <div>
        {
            mounted && (currentTheme === 'dark' ? (
                <MdLightMode 
                    onClick={() => setTheme('light')} 
                    className='text-xl cursor-pointer hover:text-amber-500' 
            /> ) : (
                 <MdDarkMode 
                    onClick={() => setTheme('dark')}
                    className='text-xl cursor-pointer hover:text-amber-500' />)
        )}
        
    </div>
  )
}
