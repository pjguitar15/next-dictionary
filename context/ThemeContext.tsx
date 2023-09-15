'use client'
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

interface ContextProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  switchThemeHandler: any
}

const GlobalContext = createContext<ContextProps>({
  theme: '',
  setTheme: () => {},
  switchThemeHandler: () => {},
})

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [theme, setTheme] = useState('dark')
  const switchThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <GlobalContext.Provider value={{ theme, setTheme, switchThemeHandler }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
