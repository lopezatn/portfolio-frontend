import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Building and maintaining cloud infrastructure using Terraform, Docker, and AWS."

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 550)
      return () => clearInterval(cursorInterval)
    }
  }, [text])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Agustin Lopez Bergero</span>
        </h1>
        <p className="hero-subtitle">DevOps Engineer</p>
        <div className="hero-description">
          <span className="typed-text">{text}</span>
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>_</span>
        </div>
        <div className="hero-bio">
          <p>
            Originally from Argentina, currently living in Berlin, I dedicate my professional time to building scalable infrastructure solutions.<br/> 
            I maintain and automate infrastructure and application deployments so software runs reliably.<br/>
            As an Engineer, my main goal is to provide customers with cost-effective solutions that allow them to think less about product runtime and more about improving the product itself.</p>
        </div>
        <div className="hero-links">
          <a href="https://github.com/lopezatn" target="_blank" rel="noopener noreferrer" className="hero-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/lopezatn" target="_blank" rel="noopener noreferrer" className="hero-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
