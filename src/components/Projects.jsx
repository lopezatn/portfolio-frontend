import './Projects.css'

function Projects() {
const projects = [
  {
    title: "AWS Portfolio Infrastructure",
    description: "Production Terraform setup provisioning EC2, security groups, IAM roles, Elastic IP, and Route 53 DNS. Features a two-stage GitHub Actions CI/CD pipeline with OIDC authentication, separating plan and apply jobs behind a human approval gate. Remote Terraform state stored in S3 with versioning. SSM-only access, IMDSv2 enforcement, and encrypted EBS volumes.",
    tech: ["Terraform", "GitHub Actions", "AWS EC2", "IAM", "S3", "Route 53", "Docker", "Nginx", "Let's Encrypt"],
    github: "https://github.com/lopezatn/portfolio-infrastructure",
    live: null
  },
  {
    title: "Health Check REST API",
    description: "Flask REST API that queries Docker container health status on the host. Built with input validation to prevent command injection. Containerized with Docker, published to AWS ECR via a GitHub Actions pipeline using OIDC authentication, and deployed to EC2 automatically via AWS Systems Manager, no SSH required.",
    tech: ["Python", "Flask", "Docker", "GitHub Actions", "AWS ECR", "AWS SSM"],
    github: "https://github.com/lopezatn/health-check-api",
    live: null
  },
  {
    title: "AWS DevOps Pathway",
    description: "Lab environment exploring production AWS patterns: multi-AZ VPC with public/private subnets, ALB and Auto Scaling Group for horizontal scaling, tiered security groups, CloudWatch monitoring with SNS alerting, and Lambda-based EBS snapshot automation with a 7-day retention policy. Fully provisioned with Terraform.",
    tech: ["Terraform", "AWS VPC", "ALB", "ASG", "Lambda", "CloudWatch", "SNS", "Python", "Boto3"],
    github: "https://github.com/lopezatn/aws-devops-pathway",
    live: null
  },
  {
    title: "Portfolio Frontend",
    description: "React single-page application serving as a personal portfolio. Built with Vite, featuring a typing animation hero, dark/light theme toggle, and a projects showcase. Deployed automatically to AWS S3 via GitHub Actions on every push to main.",
    tech: ["React", "Vite", "GitHub Actions", "AWS S3"],
    github: "https://github.com/lopezatn/portfolio-frontend",
    live: "https://lopezberg.dev"
  },
  {
    title: "Coming soon...",
    description: "",
    tech: [],
    github: "",
    live: ""
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
