import React from 'react'
import Link from 'next/link'

const NavLinks = () => {
  return (
    <ul className='flex gap-5 underline text-green-500 justify-start md:justify-end'>
      <li>
        <Link href='#'>Forum</Link>
      </li>
      <li>
        <Link href='#'>About</Link>
      </li>
      <li>
        <Link href='#'>Theme</Link>
      </li>
    </ul>
  )
}

export default NavLinks
