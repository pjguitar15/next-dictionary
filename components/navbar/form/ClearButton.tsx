import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ClearButton = ({ handleClear }: { handleClear: any }) => {
  return (
    <button onClick={handleClear} className='absolute right-10 top-0 h-full'>
      <div className='h-full w-full p-1'>
        <div className='h-full w-full flex items-center px-2 rounded-sm'>
          <FontAwesomeIcon
            className='text-gray-600 hover:text-green-800 transition duration-100 hover:scale-105 text-xl'
            icon={faXmark}
          />
        </div>
      </div>
    </button>
  )
}

export default ClearButton
