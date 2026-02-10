import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "AWS Portfolio Infrastructure",
      description: "Security-hardened AWS infrastructure hosting this portfolio: Dockerized Nginx on EC2 with automated SSL via Let's Encrypt, Route53 DNS management, SSM-only access (no SSH), IMDSv2 enforcement, encrypted EBS volumes, IAM role-based permissions, and cost-optimized architecture. Fully provisioned with Terraform demonstrating IaC and security best practices.",
      tech: ["AWS EC2", "Route-53", "SSM", "IAM", "Terraform", "Docker", "Nginx", "Let's Encrypt"],
      github: "https://github.com/lopezatn/portfolio-infrastructure",
      live: null
    },
    {
      title: "AWS DevOps Pathway",
      description: "Production-grade AWS infrastructure: multi-AZ VPC with public/private subnets, ALB + ASG for auto-scaling web workloads, tiered security groups isolating traffic between load balancer and application tiers, CloudWatch alarms for latency/error monitoring with SNS notifications, Lambda-based EBS snapshot automation with retention policies, and full IaC using Terraform.",
      tech: ["AWS EC2", "VPC", "ALB", "ASG", "Lambda", "CloudWatch", "SNS", "IAM", "Terraform", "Python", "Bash", "Nginx"],
      github: "https://github.com/lopezatn/aws-devops-pathway",
      live: null
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "End-to-end deployment automation combining GitHub Actions for lightweight deployments and Jenkins for complex infrastructure pipelines. Implements GitOps workflows with automated Terraform validation, security scanning (tfsec, Trivy), Docker image builds, and zero-downtime deployments via AWS Systems Manager.",
      tech: ["GitHub Actions", "Jenkins", "Terraform", "Docker", "tfsec", "Trivy", "AWS SSM", "GitOps"],
      github: "https://github.com/lopezatn/portfolio-infrastructure",
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
