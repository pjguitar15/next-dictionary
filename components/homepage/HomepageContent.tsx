'use client'
import React from 'react'
// context
import { useGlobalContext } from '@/context/ThemeContext'

const HomepageContent = () => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <main
      className={`${
        isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-500 '
      } py-7`}
    >
      <div className=' container mx-auto'>
        <div className='md:w-3/4 leading-7'>
          <p>
            <strong>Vocab Vault</strong> is a powerful English dictionary. It
            lets you find words, synonyms, meanings, sentences and pronunciation
            quickly and easily. Enter any english text in the search box and
            Vocab Vault will search a myriad of data for you
          </p>

          <p className='mt-3 italic'>
            Enter any english words that you are not familiar of into the search
            box!
          </p>
        </div>
      </div>
    </main>
  )
}

export default HomepageContent
