import React from 'react'
import TriIcons from './TriIcons'
import NavForm from '../navbar/form/NavForm'

const SearchBar = () => {
  return (
    <div className='mt-3'>
      <div className='container mx-auto flex gap-10 justify-start items-center'>
        <TriIcons />
        <NavForm />
      </div>
    </div>
  )
}

export default SearchBar
