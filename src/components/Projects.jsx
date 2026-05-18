import './Projects.css'
import projects from '../data/projects.json'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a href={project.github} key={project.id} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
