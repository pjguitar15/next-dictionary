import React from 'react'
import Badge from '../Badge'
import MusicPlayer from './MusicPlayer'
import Meanings from './Meanings'

const SearchResult = async ({
  paramValue,
  resultValues,
}: {
  paramValue: string
  resultValues: { word: string; phonetic: string; meanings: Object[] }
}) => {
  return (
    <div className='flex gap-12 py-6 last:border-b-0 border-b-2 border-gray-200'>
      {/* Left Column */}
      <div className='w-auto'>
        <h3 className='text-2xl font-semibold text-gray-600 capitalize mb-1'>
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
      <div className='w-10/12'>
        {resultValues.meanings.map((item: any, index) => (
          <Meanings key={index} allMeanings={item} />
        ))}
        <div className='mt-2'>
          <MusicPlayer />
        </div>
      </div>
    </div>
  )
}

export default SearchResult
