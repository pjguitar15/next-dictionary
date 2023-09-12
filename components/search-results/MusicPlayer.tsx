'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import useSound from 'use-sound'

const MusicPlayer = ({ audio }: any) => {
  const [audioFile, setAudioFile] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { duration }] = useSound(audio)
  useEffect(() => {
    setAudioFile(audio)
    console.log(audio)
  }, [audio])
  const handlePlay = () => {
    setIsPlaying(true)
    play()
    setTimeout(() => {
      setIsPlaying(false)
    }, duration)
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
          {/* {isPlaying && (
            <div
              className={`h-1 w-16 bg-green-500 ${
                isPlaying && 'animate-wave overflow-hidden'
              }`}
            ></div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
