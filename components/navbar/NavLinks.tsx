'use client'
import React from 'react'
import Link from 'next/link'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// Context
import { useGlobalContext } from '@/context/ThemeContext'

const NavLinks = () => {
  const { theme, switchThemeHandler } = useGlobalContext()

  return (
    <ul className='flex gap-5 text-green-500 justify-start md:justify-end'>
      <li>
        <Link href='/about'>About the App</Link>
      </li>
      <li>
        <a href='https://philcodes-portfolio.vercel.app/' target='_blank'>
          The Developer
        </a>
      </li>

      <div className='cursor-pointer select-none' onClick={switchThemeHandler}>
        {theme === 'dark' ? (
          <>
            <FontAwesomeIcon className='me-1' icon={faMoon} />
            <span className='hidden sm:inline-block'>Switch to Light</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon className='me-1' icon={faSun} />
            <span className='hidden sm:inline-block'>Switch to Dark</span>
          </>
        )}
      </div>
    </ul>
  )
}

export default NavLinks
