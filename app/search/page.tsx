import SearchResults from '@/components/search-results/SearchResults'
import React from 'react'

const SearchPage = ({ searchParams }: { searchParams: { value: string } }) => {
  return (
    <section className='py-7 container mx-auto'>
      <div className='flex items-center gap-2 mb-2'>
        <h3 className='text-xl text-gray-700 font-semibold'>Words</h3>
        <span className='text-gray-500'>—</span>
        <span className='text-gray-500'>582 Found</span>
      </div>
      <div className='text-gray-500 md:w-3/4 leading-7'>
        <p>Result: {searchParams.value}</p>
      </div>
      <SearchResults searchParams={searchParams.value} />
    </section>
  )
}

export default SearchPage
