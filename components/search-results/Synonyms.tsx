import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Synonyms = ({ words }: { words: string[] }) => {
  return (
    <div className='flex gap-2 text-gray-500 text-sm'>
      <h6 className='italic'>Synonyms: </h6>
      <div className='flex flex-wrap gap-2 w-3/6'>
        {words.map((item, index) => {
          return (
            <div className='flex' key={index}>
              <div className='capitalize'>{item}</div>
              {/* show dot when item is not last */}
              {index < words.length - 1 && (
                <div className='ms-2' style={{ fontSize: '5px' }}>
                  <FontAwesomeIcon className='text-green-500' icon={faCircle} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Synonyms
