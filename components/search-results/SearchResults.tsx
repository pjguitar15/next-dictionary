import React from 'react'
import SearchResult from './SearchResult'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const SearchResults = async ({ searchParams }: { searchParams: string }) => {
  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchParams}`
  )
  const res = await data.json()
  console.log(res)
  return (
    <React.Fragment>
      {res.length > 0 ? (
        <>
          {res.map((item: any, index: any) => (
            <SearchResult
              key={index}
              resultValues={item}
              paramValue={searchParams}
            />
          ))}
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <FontAwesomeIcon
            className='text-6xl text-gray-400'
            icon={faTriangleExclamation}
          />
          <h1 className='text-3xl text-gray-400 mt-2'>{res.title}</h1>
          <p className='text-md text-gray-400 mt-2'>{res.message}</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default SearchResults
