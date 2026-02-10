import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
