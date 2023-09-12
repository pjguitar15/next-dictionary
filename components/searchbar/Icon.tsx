import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCircleStop,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'

const Icon = ({ icon }: { icon: string }) => {
  return (
    <div className='flex flex-col items-center'>
      {icon === 'faPenToSquare' && (
        <>
          <FontAwesomeIcon
            className='text-3xl text-zinc-400'
            icon={faPenToSquare}
          />
          <span className='text-xs mt-1 text-zinc-400'>Write</span>
        </>
      )}
    </div>
  )
}

export default Icon
