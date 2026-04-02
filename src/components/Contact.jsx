import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          Interested in working together or have a question? Feel free to reach out.
        </p>
        <div className="contact-methods">
          <a href="mailto:agustinlpzb@gmail.com" className="contact-button">
            Send Email
          </a>
          <div className="contact-links">
            <a href="https://github.com/lopezatn" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/lopezatn" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
