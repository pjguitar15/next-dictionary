import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchButton = () => {
  return (
    <button type='submit' className='absolute right-0 top-0 h-full'>
      <div className='h-full w-full p-1'>
        <div className='bg-gray-200 h-full w-full flex items-center px-3 rounded-sm'>
          <FontAwesomeIcon className='text-gray-600' icon={faMagnifyingGlass} />
        </div>
      </div>
    </button>
  )
}

export default SearchButton
