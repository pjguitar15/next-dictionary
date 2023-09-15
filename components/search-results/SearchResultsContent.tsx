'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
// context
import { useGlobalContext } from '@/context/ThemeContext'
import SearchResult from './SearchResult'

const SearchResultsContent = ({
  APIValues,
  searchParamsValue,
}: {
  APIValues: any
  searchParamsValue: string
}) => {
  const { theme, setTheme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <React.Fragment>
      <div
        className={`flex items-center gap-2 mb-2 ${
          isDark ? 'text-white' : 'text-gray-600'
        }`}
      >
        <h3 className='text-xl font-semibold'>Words</h3>
        <span>—</span>
        <span>{APIValues.length ? APIValues.length : '0'} Found</span>
      </div>
      {APIValues.length > 0 ? (
        <>
          {APIValues.map((item: any, index: any) => (
            <SearchResult
              key={index}
              resultValues={item}
              paramValue={searchParamsValue}
            />
          ))}
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <FontAwesomeIcon
            className='text-6xl text-yellow-400'
            icon={faTriangleExclamation}
          />
          <h1 className='text-3xl text-yellow-400 mt-2'>{APIValues.title}</h1>
          <p className='text-md text-gray-400 mt-2'>{APIValues.message}</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default SearchResultsContent
