'use client'
import React from 'react'
import HomepageContent from '@/components/homepage/HomepageContent'
// context
import { useGlobalContext } from '@/context/ThemeContext'

const Home = () => {
  const { theme } = useGlobalContext()
  const isDark = theme === 'dark'
  return (
    <div className={`h-screen ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
      <HomepageContent />
    </div>
  )
}

export default Home
