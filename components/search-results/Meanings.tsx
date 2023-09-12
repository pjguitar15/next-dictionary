import React from 'react'
import Synonyms from './Synonyms'
import Definitions from './Definitions'

const Meanings = ({
  allMeanings,
}: {
  allMeanings: {
    partOfSpeech: string
    synonyms: string[]
    definitions: any
  }
}) => {
  return (
    <div className='mt-2 first:mt-0'>
      <h6 className='text-sm text-gray-500 mb-1 uppercase font-semibold'>
        {allMeanings.partOfSpeech}
      </h6>
      {/* Synonyms */}
      {allMeanings.synonyms.length > 0 && (
        <Synonyms words={allMeanings.synonyms} />
      )}
      <Definitions definitionItems={allMeanings.definitions} />
    </div>
  )
}

export default Meanings
