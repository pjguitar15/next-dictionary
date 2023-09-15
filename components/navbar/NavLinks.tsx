'use client'
import React from 'react'
import Link from 'next/link'
// Context
import { useGlobalContext } from '@/context/ThemeContext'

const NavLinks = () => {
  const { theme, switchThemeHandler } = useGlobalContext()

  return (
    <ul className='flex gap-5 underline text-green-500 justify-start md:justify-end'>
      <li>
        <Link href='#'>Forum</Link>
      </li>
      <li>
        <Link href='#'>About</Link>
      </li>

      <div className='cursor-pointer select-none' onClick={switchThemeHandler}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'}
      </div>
    </ul>
  )
}

export default NavLinks
