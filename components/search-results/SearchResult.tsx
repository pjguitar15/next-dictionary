import React from 'react'
import Badge from '../Badge'
import MusicPlayer from './MusicPlayer'
import Meanings from './Meanings'
// context
import { useGlobalContext } from '@/context/ThemeContext'

type SearchResultProps = {
  word: string
  phonetic: string
  meanings: Object[]
  phonetics: any
  audio: any
}

const SearchResult = ({
  resultValues,
}: {
  paramValue: string
  resultValues: SearchResultProps
}) => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <div
      className={`flex flex-col md:flex-row gap-12 py-6 last:border-b-0 border-b-2 border-gray-200 ${
        isDark ? '' : ''
      }`}
    >
      {/* Left Column */}
      <div className='sm:w-3/12 lg:w-2/12'>
        <h3
          className={`text-2xl font-semibold capitalize mb-1 ${
            isDark ? 'text-white' : 'text-gray-600'
          }`}
        >
          {resultValues.word}
        </h3>
        {resultValues.phonetic && (
          <p className='text-gray-400 mb-1 text-sm italic'>
            Pronounced as: {resultValues.phonetic}
          </p>
        )}

        <Badge name='common word' color='green' />
      </div>
      {/* Right column */}
      <div className='w-full md:w-10/12'>
        {resultValues.meanings.map((item: any, index) => (
          <Meanings key={index} allMeanings={item} />
        ))}

        {resultValues.phonetics.length === 0 ||
          (resultValues.phonetics[0].audio !== '' && (
            <div className='mt-2'>
              <MusicPlayer audio={resultValues.phonetics[0].audio} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchResult
