import { useState, useEffect } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
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
    <>
      <div className="corner-nav">
        <div className="corner-nav-inner">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            ~ home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
            ~ blog
          </NavLink>
        </div>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Hero />
            <Projects />
            <Contact />
          </div>
        } 
        />
        <Route path="/blog" element={ 
          <div className="app">
            <Blog />
          </div>
        } 
        />
        <Route path="/blog/:slug" element={ 
          <div className="app">
            <BlogPost />
          </div>
        } 
        />
      </Routes>
    </>
  )
}

export default App
