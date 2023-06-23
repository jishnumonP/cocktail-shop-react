import React from 'react'
import CocktailList from '../../components/Cocktail/CocktailList'
import SearchForm from '../../components/Search/SearchForm'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
