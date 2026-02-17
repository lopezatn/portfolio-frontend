import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "I build and secure cloud infrastructure."

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 530)
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
            Thank you for visiting my site!
            I'm a DevOps Engineer experienced in production operations, Linux, and hands-on AWS infrastructure expertise. 
            Built high-availability cloud environments using Terraform, Docker, and AWS services (EC2, VPC, ALB, ASG, CloudWatch). 
            Background in incident response, system troubleshooting, and infrastructure automation from IT operations roles.
          </p>
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
