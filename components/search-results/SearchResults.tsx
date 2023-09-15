import React from 'react'
import SearchResultsContent from './SearchResultsContent'

const SearchResults = ({
  APIValues,
  searchParams,
}: {
  APIValues: any
  searchParams: string
}) => {
  return (
    <SearchResultsContent
      APIValues={APIValues}
      searchParamsValue={searchParams}
    />
  )
}

export default SearchResults
