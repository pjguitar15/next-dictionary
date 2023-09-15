import React from 'react'
import Synonyms from './Synonyms'
import Definitions from './Definitions'
// context
import { useGlobalContext } from '@/context/ThemeContext'

type MeaningsProps = {
  partOfSpeech: string
  synonyms: string[]
  definitions: any
}

const Meanings = ({ allMeanings }: { allMeanings: MeaningsProps }) => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <div className='mt-2 first:mt-0'>
      <h6
        className={`text-sm mb-1 uppercase font-semibold ${
          isDark ? 'text-white' : 'text-gray-500'
        }`}
      >
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
