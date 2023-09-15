import React from 'react'
import SearchpageContent from '@/components/search page/SearchpageContent'

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { value: string }
}) => {
  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchParams.value}`
  )

  const res = await data.json()
  return (
    <SearchpageContent APIValues={res} searchParamsValue={searchParams.value} />
  )
}

export default SearchPage
