'use client'

import { createContext, useState, useMemo } from "react"

export const GalleryContext = createContext({
  currentpage: '',
  setCurrentpage: () => null
})

const GalleryProvider = ({children}) => {
  const [ currentpage, setCurrentpage ] = useState('gallery')

  const value = useMemo(() => ({
    currentpage,
    setCurrentpage
  }), [currentpage])



  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}

export default GalleryProvider