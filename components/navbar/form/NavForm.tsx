'use client'
import React, { useState } from 'react'
import SearchButton from './SearchButton'
import ClearButton from './ClearButton'
import { useRouter } from 'next/navigation'

const NavForm = () => {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleClear = (e: any) => {
    e.preventDefault()
    setInput('')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (input) router.push(`/search?value=${input}`)
  }
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='relative'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='px-4 py-2 border-2 border-zinc-200 hover:border-green-300 animation duration-100 ease-in-out w-full outline-gray-300 rounded-md text-gray-400'
          type='text'
          placeholder='What word do you want to know?'
        />
        <SearchButton />
        <ClearButton handleClear={handleClear} />
      </div>
    </form>
  )
}

export default NavForm
