import SearchResults from '@/components/search-results/SearchResults'
import React from 'react'

const SearchPage = ({ searchParams }: { searchParams: { value: string } }) => {
  return (
    <section className='py-7 container mx-auto'>
      <div className='text-gray-500 text-sm mb-2 md:w-3/4 leading-7'>
        <p>
          You searched for:
          {` "${searchParams.value}"`}
        </p>
      </div>
      <hr className='mb-6' />
      <SearchResults searchParams={searchParams.value} />
    </section>
  )
}

export default SearchPage
