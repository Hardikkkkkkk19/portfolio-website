function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">
          Hardik <span>Jadhav</span>
        </h1>

        <h2 className="hero-role">
          Diploma Computer Engineering Student
        </h2>

        <p className="hero-description">
          Passionate Frontend, Backend and Full Stack Developer
          and UI/UX Enthusiast. I enjoy creating responsive,
          modern and user-friendly web applications using React
          and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="contact-btn"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="/profile.png"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;