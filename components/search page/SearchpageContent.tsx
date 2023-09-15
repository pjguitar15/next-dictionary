'use client'
import React from 'react'
import SearchResults from '@/components/search-results/SearchResults'
// context
import { useGlobalContext } from '@/context/ThemeContext'

const SearchpageContent = ({
  APIValues,
  searchParamsValue,
}: {
  APIValues: any
  searchParamsValue: string
}) => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <section
      className={`py-7 min-h-[88vh] ${
        isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-600'
      }`}
    >
      <div className='container mx-auto'>
        <div className='text-sm mb-2 md:w-3/4 leading-7'>
          <p>
            You searched for:
            {` "${searchParamsValue}"`}
          </p>
        </div>
        <hr className='mb-6' />
        <SearchResults APIValues={APIValues} searchParams={searchParamsValue} />
      </div>
    </section>
  )
}

export default SearchpageContent
