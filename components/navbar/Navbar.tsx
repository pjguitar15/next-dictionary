import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-3'>
      <div className='container mx-auto md:flex justify-between items-center'>
        <Link href={'/'}>
          <div className='md:text-left mb-2 md:mb-0 flex justify-start'>
            <h1 className='text-zinc-700 font-bold text-3xl'>
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
