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
        <Link href='#'>Forum</Link>
      </li>
      <li>
        <Link href='#'>About</Link>
      </li>

      <div className='cursor-pointer select-none' onClick={switchThemeHandler}>
        {theme === 'dark' ? (
          <>
            <FontAwesomeIcon className='me-1' icon={faMoon} />
            Switch to Light
          </>
        ) : (
          <>
            <FontAwesomeIcon className='me-1' icon={faSun} />
            Switch to Dark
          </>
        )}
      </div>
    </ul>
  )
}

export default NavLinks
