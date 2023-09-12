'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      setIsPlaying(false)
    }, 2000)
  }
  return (
    <div>
      <div className='flex gap-2'>
        <span
          className={`text-sm ${
            isPlaying ? 'text-green-500' : 'text-gray-400'
          }`}
        >
          {isPlaying ? 'Playing' : 'Listen'}
        </span>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon
            onClick={handlePlay}
            className={`text-xl ${
              isPlaying ? 'text-green-500' : 'text-gray-500'
            } hover:text-green-400 cursor-pointer transition duration-200`}
            icon={isPlaying ? faCirclePause : faCirclePlay}
          />
          {isPlaying && (
            <div
              className={`h-1 w-16 bg-green-500 ${
                isPlaying && 'animate-wave overflow-hidden'
              }`}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
