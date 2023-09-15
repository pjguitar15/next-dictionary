'use client'
import React from 'react'
import NavForm from '../navbar/form/NavForm'
// context
import { useGlobalContext } from '@/context/ThemeContext'

const SearchBar = () => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <div className={`pt-3 ${isDark ? 'bg-zinc-900' : 'bg-white'} `}>
      <div className='container mx-auto flex gap-10 justify-start items-center'>
        {/* <TriIcons /> */}
        <NavForm />
      </div>
    </div>
  )
}

export default SearchBar
