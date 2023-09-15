'use client'
import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'
// Context
import { useGlobalContext } from '@/context/ThemeContext'

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <div className={`py-3 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className='container mx-auto md:flex justify-between items-center'>
        <Link href={'/'}>
          <div className='md:text-left mb-2 md:mb-0 flex justify-start'>
            <h1
              className={`${
                isDark ? 'text-white' : 'text-zinc-700'
              }  font-bold text-3xl`}
            >
              Vocab <span className='text-green-400'>Vault</span>
            </h1>
            <span className='text-xs text-gray-400 ms-2 mt-auto mb-1 italic'>
              App by Philcob
            </span>
          </div>
        </Link>
        <NavLinks />
      </div>
    </div>
  )
}

export default Navbar
