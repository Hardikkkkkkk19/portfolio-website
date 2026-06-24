function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        I am a Diploma Computer Engineering student passionate about
        web development, UI/UX design and modern technologies.
        I enjoy building responsive websites, solving real-world
        problems and continuously learning new skills.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>Diploma in Computer Engineering</p>
        </div>

        <div className="about-card">
          <h3>💻 Development</h3>
          <p>Frontend, Backend and Full Stack Web Development with React</p>
        </div>

        <div className="about-card">
          <h3>🎨 UI/UX</h3>
          <p>Designing Modern User Interfaces</p>
        </div>

        <div className="about-card">
          <h3>🚀 Projects</h3>
          <p>Building Applications</p>
        </div>
      </div>
    </section>
  );
}

export default About;