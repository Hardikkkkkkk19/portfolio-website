function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>ASUS Premium Store</h3>

          <p>
            Modern e-commerce website built using React.
            Includes product listing, cart functionality
            and responsive UI.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Health Connect</h3>

          <p>
            Smart Healthcare Queue & Clinic Management
            platform focused on reducing waiting time
            and improving patient experience.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            Personal portfolio showcasing skills,
            achievements, certificates and projects
            with a modern design.
          </p>

          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;