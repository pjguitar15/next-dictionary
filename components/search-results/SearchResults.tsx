import React from 'react'
import SearchResult from './SearchResult'

const SearchResults = async ({ searchParams }: { searchParams: string }) => {
  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchParams}`
  )
  const res = await data.json()
  return (
    <React.Fragment>
      {res.map((item: any, index: any) => (
        <SearchResult
          key={index}
          resultValues={item}
          paramValue={searchParams}
        />
      ))}
    </React.Fragment>
  )
}

export default SearchResults
