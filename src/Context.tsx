import React, { useState, useContext, useEffect, createContext } from 'react'
import { useCallback } from 'react'
import { IAppContext } from './type'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext<IAppContext | null>(null)

const AppProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState<any>([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {drinks} = data
      if(drinks){
        const newCocktail = drinks.map((item:any) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
          return(
            {
              id: idDrink,
              name:strDrink,
              img:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass
            }
          )
        })
        setCocktails(newCocktail)
      }else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return(
    <AppContext.Provider value={{
      loading,
      searchTerm,
      cocktails,
      setSearchTerm
    }}>
    {children}
    </AppContext.Provider>
  )
  
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }