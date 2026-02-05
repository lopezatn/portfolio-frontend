import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "AWS Portfolio Infrastructure",
      description: "Production-grade AWS infrastructure for this portfolio. Single EC2 instance with Docker, Nginx, automated HTTPS via Let's Encrypt, and secure SSM-only access. Demonstrates infrastructure-as-code principles and security best practices.",
      tech: ["AWS EC2", "Docker", "Nginx", "Let's Encrypt", "Terraform", "SSM"],
      github: "https://github.com/lopezatn/portfolio-infrastructure",
      live: "https://lopezberg.dev"
    },
    {
      title: "Project Title 2",
      description: "Lorem ipsum",
      tech: ["Tech 1", "Tech 2", "Tech 3"],
      github: "https://github.com/lopezatn/project2",
      live: null
    },
    {
      title: "Project Title 3",
      description: "Lorem ipsum",
      tech: ["Tech 1", "Tech 2", "Tech 3"],
      github: "https://github.com/lopezatn/project3",
      live: null
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
