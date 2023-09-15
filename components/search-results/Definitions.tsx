'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
// context
import { useGlobalContext } from '@/context/ThemeContext'

// Define a specific type for the definition items
interface DefinitionItem {
  definition: string
}

interface DefinitionsProps {
  definitionItems: DefinitionItem[]
}

const Definitions: React.FC<DefinitionsProps> = ({
  definitionItems,
}: DefinitionsProps) => {
  const [displayedItems, setDisplayedItems] = useState(3)
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'

  const loadDefinitionHandler = () => {
    setDisplayedItems(definitionItems.length)
  }

  const hideDefinitionHandler = () => {
    setDisplayedItems(3)
  }

  return (
    <div className='py-2 ps-4'>
      {definitionItems.slice(0, displayedItems).map((item, index) => (
        <p
          key={index}
          className={`text-sm mt-1  lg:w-3/5 border-b last:border-0 pb-2 pt-1 ${
            isDark ? 'text-white' : 'text-gray-500'
          }`}
        >
          {item.definition}
        </p>
      ))}

      {definitionItems.length > 3 && (
        <div>
          {displayedItems !== definitionItems.length ? (
            <div
              onClick={loadDefinitionHandler}
              className='text-green-500 text-sm underline mt-3 cursor-pointer flex gap-2'
            >
              <FontAwesomeIcon icon={faSortDown} />
              Load more definitions
            </div>
          ) : (
            <div
              onClick={hideDefinitionHandler}
              className='text-green-500 text-sm underline mt-3 cursor-pointer flex items-center gap-2'
            >
              <FontAwesomeIcon icon={faSortUp} />
              Hide definitions
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Definitions
